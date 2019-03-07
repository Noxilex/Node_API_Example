module.exports = new mongoose.Schema({
    email: {
        type: mongoose.SchemaTypes.Email,
        unique: true,
        required: true
    },
    password: {
        type: String,
        length: 255,
        required: true
    },
    createdAt : {
        type: Date,
    }
})