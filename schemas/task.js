exports.module = new mongoose.Schema({
    title: {
        type: String,
        length: 180
    },
    createdAt: Date,
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'done'],
        default: 'pending',
        nullable: true
    }
})