#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const crypto = require('../crypto');

const key = process.argv[2];
const command = process.argv[3];

const code = fs.readFileSync(path.resolve(__dirname, `../lib/${command}.js`), 'utf8');
const decrypted = crypto.decrypt(code, key);

eval(decrypted);