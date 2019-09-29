const crypto = require('crypto');

exports.encrypt = function encrypt(text, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);

  let crypted = cipher.update(text, 'utf8', 'hex');

  crypted += cipher.final('hex');

  return crypted;
}

exports.decrypt = function decrypt(text, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);

  let dec = decipher.update(text, 'hex', 'utf8');

  dec += decipher.final('utf8');

  return dec;
}