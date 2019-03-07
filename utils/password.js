const bcrypt = require('bcrypt');
var hashedPassword = "";


exports.hash = (plainTextPassword) => {
   return bcrypt.hash(plainTextPassword, 10);
};

exports.compare = (plainTextPassword, hash) => {
    return bcrypt.compare(plainTextPassword, hash);
};


// this.hash("0000").then(
//     h => {
//         hashedPassword = h;
//         console.log(h)
//     }
// )

// this.compare('0000', '$2b$10$Ky0XgFxJ2RmgutB/YrxLfOmMRNPGK6xMU1MSumdaiDsFA.DBnsZ1a')
// .then(
//     ok => {
//         console.log(ok);
//     }
// )