module.exports = new mongoose.Schema({
    title: {
        type: String,
        length: 180
    },
    createdAt: Date,
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'done'],
        default: 'pending'
    }
})

// exports.task = () => {}
// const schema = require('./tasks')
// schema.task()

// exports.module = () => {}
// const schema = require('./tasks')
// schema.module()

// module.exports = () => {}
// const schema = require('./tasks')
// schema()