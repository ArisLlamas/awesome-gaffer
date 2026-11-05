import { readFile, writeFile } from 'node:fs/promises';

const load = path => readFile(new URL(path, import.meta.url), 'utf8');
const entries = JSON.parse(await load('../data/resources.yml'));
const template = (await load('../data/readme.template.md')).replaceAll('\r\n', '\n');
const sections = new Map();
const urls = new Set();
const fields = ['name', 'url', 'task', 'level', 'gaffer_version', 'renderer', 'status', 'source_type', 'description', 'section'];
for (const item of entries) {
  for (const key of fields) {
    if (typeof item[key] !== 'string' || !item[key].trim() || /[\r\n]/.test(item[key])) {
      throw new Error('Invalid ' + key + ' for ' + item.name);
    }
  }
  if (!item.url.startsWith('https://') || urls.has(item.url)) throw new Error('Invalid or repeated URL: ' + item.url);
  urls.add(item.url);
  if (!['Artist', 'TD', 'Both'].includes(item.level)) throw new Error('Invalid level: ' + item.name);
  if (!['Read', 'Unchecked', 'Tested'].includes(item.status)) throw new Error('Invalid status: ' + item.name);
  if (!sections.has(item.section)) sections.set(item.section, []);
  sections.get(item.section).push(item);
}
const used = new Set();
const output = template.replace(/^<!-- resources: (.+) -->$/gm, (_, section) => {
  if (used.has(section) || !sections.has(section)) throw new Error('Unexpected resource section: ' + section);
  used.add(section);
  return sections.get(section).map(item =>
    '- [' + item.name + '](' + item.url + ') - [' + item.level + '] [' + item.status + '] ' + item.description
  ).join('\n');
});
if (used.size !== sections.size) throw new Error('The template omits a resource section.');
if (process.argv.includes('--check')) {
  if (output !== (await load('../README.md')).replaceAll('\r\n', '\n')) {
    console.error('README.md differs from its source. Run node scripts/build-readme.mjs.');
    process.exitCode = 1;
  }
} else {
  await writeFile(new URL('../README.md', import.meta.url), output);
}
