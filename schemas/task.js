exports.task = new mongoose.Schema({
    title: {
        type: String,
        length: 180
    },
    createdAt: String,
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'done'],
        default: 'pending'
    }
})