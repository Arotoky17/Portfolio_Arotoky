const fs = require('fs');
const path = require('path');
const dir = 'd:/Portfolio/src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx') && f !== 'Navbar.jsx');

for (const file of files) {
  const p = path.join(dir, file);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/text-white/g, 'text-ninja-text');
  content = content.replace(/text-slate-[23]00/g, 'text-ninja-text');
  content = content.replace(/text-slate-[456]00/g, 'text-ninja-muted');
  content = content.replace(/bg-slate-[89]00/g, 'bg-ninja-card');
  content = content.replace(/bg-slate-950/g, 'bg-ninja-bg');
  content = content.replace(/border-slate-[78]00/g, 'border-ninja-border');
  content = content.replace(/text-primary-[456]00/g, 'text-ninja-accent');
  content = content.replace(/bg-primary-[56]00(?!\/)/g, 'bg-ninja-accent');
  content = content.replace(/bg-dark/g, 'bg-ninja-bg');
  fs.writeFileSync(p, content);
}
console.log('Colors replaced successfully.');
