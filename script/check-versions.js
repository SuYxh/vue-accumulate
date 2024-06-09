import semver from 'semver';
import { execSync } from 'child_process';

console.log('check-versions');

const requiredNodeVersion = '18.x';
const requiredNpmVersion = '>=7.0.0';
const currentNodeVersion = process.versions.node;
const currentNpmVersion = execSync('npm --version').toString().trim();

if (!semver.satisfies(currentNodeVersion, requiredNodeVersion)) {
  console.error(`Required node version ${requiredNodeVersion} not satisfied with current version ${currentNodeVersion}.`);
  process.exit(1);
}

if (!semver.satisfies(currentNpmVersion, requiredNpmVersion)) {
  console.error(`Required npm version ${requiredNpmVersion} not satisfied with current version ${currentNpmVersion}.`);
  process.exit(1);
}

// 检查是否通过 npm 进行安装
const userAgent = process.env.npm_config_user_agent;
console.log('userAgent', userAgent);
if (!userAgent || userAgent.includes('pnpm')) {
  console.error('This project must be installed using npm.');
  process.exit(1);
}

console.log('Version and package manager checks passed.');
