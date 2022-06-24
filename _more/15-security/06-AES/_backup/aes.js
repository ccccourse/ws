var crypto = require('crypto')
var algorithm = 'aes-256-ctr'
var password = 'd6F3Efeq'

function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 
var plainText  = "hello world"
var cipherText = encrypt(plainText)
var decryptText = decrypt(cipherText)
console.log('plainText  =', plainText)
console.log('cipherText =', cipherText)
console.log('decryptText=', decryptText)
