const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});

let plaintext_passwords = ["`3]qNt", "npK!3b", "tU$9K}", "MF7(m[", "]mX4w?", "'t2%F9", ",2bwSX", "R%t&6f", "gK,4Jr", "Bp2r$^"]

let container = []

async function thing(){
  //   plaintext_passwords.forEach(async (pass) => {
  //     // console.log('this')
  //     await bcrypt.hash(pass, saltRounds, (err, hash) => {
  //       console.log(pass, hash)
  //       container.push([pass, hash])
  //   })
  // })
  for (let i=0; i < plaintext_passwords.length ; i++){
    let pass = plaintext_passwords[i]
    await bcrypt.hash(pass, saltRounds, (err, hash) => {
      console.log(pass, hash)
      container.push([pass, hash])
    })
  }
  console.log(container)
}
thing()

// bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
//   // result == true
// });


// bcrypt.compare("Bp2r$^", "$2b$10$YemhtHnDMv5u.yM/iFooqebp3LmB0YGwWjsV3lZ8kXC1nLYzf4SsW", function(err, result) {
//   console.log(result)
// });