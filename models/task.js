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
    return Task.findOneAndDelete({_id: id});
}

function create(task){
    return Task.create(task);
}

function update(task){
    return Task.findOneAndUpdate({_id: task.id}, task);
}