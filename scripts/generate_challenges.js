// scripts/generate_challenges.js
const fs = require('fs');
const path = require('path');

const phasesRoot = process.cwd(); // run from repo root
const phaseDirs = fs.readdirSync(phasesRoot).filter(f => f.toLowerCase().startsWith('phase'));

const output = { phases: [] };

phaseDirs.forEach((pd, idx) => {
  const abs = path.join(phasesRoot, pd);
  if (!fs.lstatSync(abs).isDirectory()) return;
  const challengeDirs = fs.readdirSync(abs).filter(f => fs.lstatSync(path.join(abs, f)).isDirectory());
  const challenges = [];
  challengeDirs.forEach(cd => {
    const challengePath = path.join(abs, cd);
    const files = fs.readdirSync(challengePath).filter(f => f.endsWith('.py') || f.endsWith('.java'));
    files.forEach(f => {
      challenges.push({
        id: f.replace(/\W+/g, '_').toLowerCase().replace(/\.(py|java)$/,''),
        title: f.replace(/_/g, ' ').replace(/\.(py|java)$/, ''),
        path: `../${pd}/${cd}/${f}`,
        language: f.endsWith('.py') ? 'python' : 'java',
        tags: []
      });
    });
  });
  output.phases.push({
    id: idx+1,
    name: pd,
    status: 'incomplete',
    challenges
  });
});

const dest = path.join(process.cwd(), 'site', 'src', 'app', 'data');
if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
fs.writeFileSync(path.join(dest, 'challenges.json'), JSON.stringify(output, null, 2));
console.log('wrote site/src/app/data/challenges.json');
