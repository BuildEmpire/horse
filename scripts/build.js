const fs = require('fs');
const path = require('path');

const crypto = require('../crypto');
const keys = require('../keys');

const unbuild = process.argv[2] === 'unbuild';

for(let [command, key] of Object.entries(keys)) {
  const srcPath = path.resolve(__dirname, `../src/${command}.js`);
  const libPath = path.resolve(__dirname, `../lib/${command}.js`);

  const code = fs.readFileSync(
    unbuild ? libPath : srcPath,
    'utf8'
  );

  const encrypted = crypto[unbuild ? 'decrypt' : 'encrypt'](code, key);

  fs.writeFileSync(
    unbuild ? srcPath : libPath,
    encrypted
  );
}