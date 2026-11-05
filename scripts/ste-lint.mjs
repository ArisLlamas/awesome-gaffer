import { readFile, readdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const config = {
  sentence: 25, instruction: 20, paragraph: 6,
  banned: ['should', 'may', 'might', 'curated', 'baseline', 'deep dive', 'under the hood'],
  imperative: /^(?:add|apply|build|check|choose|compare|confirm|connect|create|download|enable|find|follow|inspect|install|keep|launch|link|look|open|read|record|run|save|select|set|start|use|verify|view|watch|write)\b/i,
  acronym: { USD: 'Universal Scene Description', TD: 'technical director', DCC: 'digital content creation' },
  // Verbatim supplied guide: rule lists, examples, and glossary are instructional data.
  guideSections: new Set(['Rules', 'Before and after', 'Glossary (draft)']),
};
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const load = p => readFile(resolve(root, p), 'utf8');
const log = await load('docs/test-log.md').catch(() => '');
const files = ['README.md', 'CONTRIBUTING.md', ...(await readdir(resolve(root, 'docs'))).filter(p => p.endsWith('.md')).map(p => 'docs/' + p)];
const entries = JSON.parse(await load('data/resources.yml'));
const tested = name => log.split(/\r?\n/).some(line => {
  const cells = line.trim().split('|').slice(1, -1).map(s => s.trim());
  return cells.length === 8 && /^\d{4}-\d{2}-\d{2}$/.test(cells[0]) && cells[1] === name && cells.slice(2, 7).every(Boolean);
});
const words = s => s.match(/[\p{L}\p{N}]+(?:['’.-][\p{L}\p{N}]+)*/gu) ?? [];
const seg = new Intl.Segmenter('en', { granularity: 'sentence' });
const prose = s => s.replace(/!\[[^\]]*\]\([^)]+\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/https?:\/\/\S+/g, '')
  .replace(/<!--.*?-->/g, '').replace(/[*_~]/g, '').replace(/[\u0060]/g, '');
let errors = 0, warnings = 0;
for (const file of files) {
  const lines = (await load(file)).split(/\r?\n/);
  const report = (line, message, warning = false) => {
    if (warning) warnings++; else errors++;
    console.log(file + ':' + line + ': ' + (warning ? 'warning: ' : '') + message);
  };
  let fence, section = '', parts = [], count = 0, start = 0, allowance = file === 'README.md' ? 1 : 0;
  const expanded = new Set();
  const flush = () => {
    if (!parts.length) return;
    const paragraph = parts.join(' ');
    for (const { segment } of seg.segment(paragraph)) {
      const sentence = segment.trim();
      const length = words(sentence).length;
      if (!length) continue;
      count++;
      if (length > config.sentence) report(start, 'Sentence has ' + length + ' words (limit ' + config.sentence + ').');
      if (length > config.instruction && config.imperative.test(sentence)) report(start, 'Instruction has ' + length + ' words (limit ' + config.instruction + ').', true);
      if (/\b(?:am|is|are|was|were|be|been|being)\s+\p{L}+(?:ed|en)\b/iu.test(sentence)) report(start, 'Possible passive voice.', true);
    }
    if (count > config.paragraph) report(start, 'Paragraph has more than ' + config.paragraph + ' sentences.', true);
    parts = []; count = 0;
  };
  lines.forEach((line, i) => {
    const n = i + 1;
    const block = line.match(/^\s*([\u0060]{3,}|~{3,})/);
    if (block) { flush(); if (!fence) fence = block[1]; else if (fence[0] === block[1][0] && block[1].length >= fence.length) fence = undefined; return; }
    if (fence || /^(?: {4}|\t)/.test(line)) return;
    const heading = line.match(/^#+\s+(.*)/);
    if (heading && !/^### /.test(line)) section = heading[1];
    if (file === 'docs/ste-style-guide.md' && config.guideSections.has(section)) { flush(); return; }
    const entry = line.match(/^-\s+\[([^\]]+)\]\((https:\/\/[^)]+)\)\s+-\s+(.*)$/);
    if (entry) {
      const [, name, url, body] = entry;
      const tags = body.match(/^\[(Artist|TD|Both)\]\s+\[(Read|Unchecked|Tested)\]\s+/);
      if (!tags) report(n, 'Resource needs a level and a status.');
      if (tags?.[2] === 'Tested' && !tested(name)) report(n, 'Tested resource has no test-log row.');
      if (file === 'README.md' && !entries.some(e => e.url === url && e.level === tags?.[1] && e.status === tags?.[2])) {
        report(n, 'Resource tags do not match the catalogue.');
      }
      line = body.replace(/^\[(Artist|TD|Both)\]\s+\[(Read|Unchecked|Tested)\]\s+/, '');
    }
    const discrete = entry || heading || /^\s*(?:[-*]|\d+\.)\s|^\|/.test(line);
    if (!line.trim() || discrete) flush();
    const cells = line.startsWith('|') ? line.split('|').slice(1, -1) : [line];
    for (const cell of cells) {
      let s = prose(cell).replace(/^\s*(?:#+|[-*]|\d+\.|\[[ xX]\])\s*/g, '').trim();
      if (!words(s).length) continue;
      if (allowance && /\bversion baseline\b/i.test(s)) { s = s.replace(/\bversion baseline\b/i, 'version target'); allowance--; }
      for (const term of config.banned) if (new RegExp('\\b' + term + '\\b', 'i').test(s)) report(n, 'Avoid "' + term + '".');
      for (const [abbr, full] of Object.entries(config.acronym)) {
        const use = s.search(new RegExp('\\b' + abbr + 's?\\b'));
        if (use >= 0 && !expanded.has(abbr)) {
          const expansion = s.toLowerCase().indexOf(full.toLowerCase());
          if (expansion >= 0 && expansion < use) expanded.add(abbr);
          else if (!expanded.has('warn:' + abbr)) { report(n, 'Expand ' + abbr + ' on first use.', true); expanded.add('warn:' + abbr); }
        }
      }
      if (!parts.length) start = n;
      parts.push(s);
      if (discrete) flush();
    }
  });
  flush();
}
console.log(errors + ' errors, ' + warnings + ' warnings');
if (errors) process.exitCode = 1;
