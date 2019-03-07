/**
 * Todo controller
 */
const logger = require('../utils/logger')
const task = require('../models/task')

exports.find = find;
exports.update = update;
exports.create = create;
exports.remove = remove;
exports.all = all;

function find(req, res) {
    const id = req.params.id;
    if(!id) {
        res.status(422).json({message: "No id found in the request provided"});
        return;
    }
    task.findById(id).then(
        data => {
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json({
                    message: 'Data not found for provided id'
                });
            }
        },
        err => {
            res.status(404).json(err);
            logger.error(err);
        }
    )
}

function update(req, res) {
    const bodyTask = req.body;
    console.log(bodyTask)
    task.update(bodyTask).then(
        data => {
            res.status(200).json(data);
        },
        err => {
            res.status(404).json(err);
            logger.error(err);
        }
    )
}

function create(req, res) {
    if(!req.body.createdAt){
        req.body.createdAt = new Date();
    }
    task.create(req.body).then(
        data => {
            req.body._id = data._id;
            res.status(200).json(req.body);
        },
        err => {
            res.status(404).json(err);
            logger.error(err);
        }
    )
}

function remove(req, res) {
    const id = req.params.id;
    console.log(id)
    if(!id) {
        res.status(422).json({message: "No id found in the request provided"});
        return;
    }

    task.remove(id).then(
        data => {
            res.status(200).json(data);
        },
        err => {
            res.status(404).json(err);
            logger.error(err);
        }
    )
}

function all(req, res) {
    task.find().then(
        data => {
            //logger.log('debug', {message: "Found all"})
            res.status(200).json(data);
        },
        err => {
            res.status(404).json(err);
            logger.error(err);
        }
    );
}