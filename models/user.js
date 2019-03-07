const schema = require('../schemas/user')
const User = mongoose.model('User', schema)

exports.authenticate = authenticate;
exports.register = register;

function getUser(data){
    return User.findOne({email: data.email});
}

function authenticate(data){
    return getUser(data).then(
        user => {
            if(!user){
                throw new Error('User not found');
            }else{
                return password.compare(data.password, user.password);
            }
        }
    )
}

function register(data){
    console.log(data)
    return password.hash(data.password).then(
        hash => {
            console.log(hash)
            data.password = hash;
            data.createdAt = new Date();
            return new User(data).save();
        }
    )
}
