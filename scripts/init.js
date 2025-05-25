// scripts/init.js
import { execSync } from 'child_process';
import fs from 'fs';

const run = (cmd, desc) => {
  console.log(`\n🔧 ${desc}...`);
  execSync(cmd, { stdio: 'inherit' });
};

// Install packages
run('npm install', 'Installing dependencies');

// Init Tauri with default config
if (!fs.existsSync('src-tauri')) {
  run(`npx tauri init`, 'Initializing Tauri');
}

console.log('\n✅ Project initialized!');