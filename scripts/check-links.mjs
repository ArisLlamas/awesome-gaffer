import {readFile,writeFile,readdir,access} from 'node:fs/promises';
import {resolve,dirname,relative} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const slug=s=>s.toLowerCase().replace(/[^\p{L}\p{N}_\-\s]/gu,'').replace(/ /g,'-');
const links=s=>[...s.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)].map(m=>m[1]);
const headings=s=>{const counts=new Map();return [...s.matchAll(/^#{1,6} (.+)$/gm)].map(m=>{const base=slug(m[1].replace(/\[([^\]]+)\]\([^)]*\)/g,'$1'));const n=counts.get(base)||0;counts.set(base,n+1);return n?base+'-'+n:base})};
const files=['README.md','CONTRIBUTING.md',...(await readdir(resolve(root,'docs'))).filter(f=>f.endsWith('.md')).map(f=>'docs/'+f)];
const failures=[],external=new Set();let internal=0,entries=0;
for(const req of ['README.md','CONTRIBUTING.md','LICENSE','docs/learning-path.md','docs/arnold-setup.md','docs/maya-to-gaffer.md','docs/curation.md','docs/foundation.md','docs/resource-review.md']){try{await access(resolve(root,req))}catch{failures.push('Missing '+req)}}
for(const file of files){const text=await readFile(resolve(root,file),'utf8');for(const target of links(text)){if(target.startsWith('https://')){external.add(target);continue}if(target.startsWith('http://')){failures.push(file+': insecure URL '+target);continue}if(/^[a-z]+:/i.test(target))continue;internal++;const [path,anchor]=target.split('#');const full=path?resolve(dirname(resolve(root,file)),decodeURIComponent(path)):resolve(root,file);if(!full.startsWith(root)){failures.push(file+': outside repository '+target);continue}try{const other=await readFile(full,'utf8');if(anchor&&!headings(other).includes(decodeURIComponent(anchor)))failures.push(file+': heading not found '+target)}catch{failures.push(file+': file not found '+target)}}}
const readme=await readFile(resolve(root,'README.md'),'utf8');const resourceLines=readme.split('\n').filter(l=>/^- \[[^\]]+\]\(https:\/\//.test(l));const resourceUrls=[];
for(const line of resourceLines){entries++;if(!/^- \[[^\]]+\]\(https:\/\/[^)]+\) - [A-Z].+\.$/.test(line.trim()))failures.push('Entry format: '+line);resourceUrls.push(links(line)[0])}
for(const u of new Set(resourceUrls)){if(resourceUrls.filter(x=>x===u).length>1)failures.push('Duplicate resource '+u)}
const summary={markdownFiles:files.length,resourceEntries:entries,internalLinks:internal,externalUrls:external.size,structuralFailures:failures};
if(failures.length){console.error(JSON.stringify(summary,null,2));process.exit(1)}
if(process.argv.includes('--local')){console.log(JSON.stringify(summary,null,2));process.exit(0)}
const outcomes=[];const list=[...external];for(let i=0;i<list.length;i+=6){outcomes.push(...await Promise.all(list.slice(i,i+6).map(async url=>{try{const r=await fetch(url,{signal:AbortSignal.timeout(20000),headers:{'User-Agent':'awesome-gaffer-link-review'}});const item={url,status:r.status,finalUrl:r.url};await r.body?.cancel();return item}catch(e){return {url,status:'unresolved',reason:e.name}}})));}
const report={checkedAt:new Date().toISOString(),...summary,outcomes};await writeFile(resolve(root,'docs/link-check.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...summary,httpSuccess:outcomes.filter(x=>typeof x.status==='number'&&x.status>=200&&x.status<400).length,unresolved:outcomes.filter(x=>typeof x.status!=='number'||x.status>=400)},null,2));if(outcomes.some(x=>x.status===404||x.status===410))process.exitCode=1;
