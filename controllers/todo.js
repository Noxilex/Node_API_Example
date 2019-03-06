/**
 * Todo controller
 */
const task = require('../models/task')
exports.find = find;
exports.update = update;
exports.create = create;
exports.remove = remove;
exports.all = all;

function find(req, res) {
    const id = req.params.id;
    if(!id) {
        res.status(422).json({error: "No id found in the request provided"});
        return;
    }
    task.findById(id).then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    )
}

function update(req, res) {
    const bodyTask = req.body;
    console.log(bodyTask)
    task.update(bodyTask).then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    )
}

function create(req, res) {
    const bodyTask = req.body;
    console.log(req.body)
    task.create(bodyTask).then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    )
}

function remove(req, res) {
    const id = req.params.id;
    console.log(id)
    if(!id) {
        res.status(422).json({error: "No id found in the request provided"});
        return;
    }
    task.remove(id).then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err);
        }
    )
}

function all(req, res) {
    task.find().then(
        data => {
            res.json(data);
        },
        err => {
            res.json(err)
        }
    );
}