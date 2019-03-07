const schema = require('../schemas/task')

const Task = mongoose.model('Task', schema)

exports.findById = findById;
exports.find = find;
exports.remove = remove;
exports.create = create;
exports.update = update;

function findById(id) {
    return Task.findById(id);
}

function find(){
    return Task.find();
}

function remove(id){
    return Task.findByIdAndDelete(id);
}

function create(data){
    return new Task(data).save();
}

function update(task){
    return Task.findByIdAndUpdate(task._id, task);
}