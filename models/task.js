const schema = require('../schemas/task')

const Task = mongoose.model('Task', schema.task)

exports.findById = findById;
exports.find = find;
exports.remove = remove;
exports.create = create;
exports.update = update;
exports.Task = Task;

function findById(id) {
    return Task.findById(id);
}

function find(){
    return Task.find();
}

function remove(id){
    return Task.findOneAndDelete({_id: id});
}

function create(data){
    return new Task(data).save();
}

function update(task){
    return Task.findOneAndUpdate({_id: task._id}, task);
}