const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});

let plaintext_passwords = ["`3]qNt", "npK!3b", "tU$9K}", "MF7(m[", "]mX4w?", "'t2%F9", ",2bwSX", "R%t&6f", "gK,4Jr", "Bp2r$^"]

// plaintext_passwords.forEach(pass => {
//   bcrypt.hash(pass, saltRounds, (err, hash) => {
//     console.log(hash)
//   })
// })

// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//   // result == true
// });


bcrypt.compare("Bp2r$^", "$2b$10$YemhtHnDMv5u.yM/iFooqebp3LmB0YGwWjsV3lZ8kXC1nLYzf4SsW", function(err, result) {
  console.log(result)
});