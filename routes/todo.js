/**
 * Todo Routes
 */

const controller = require('../controllers/todo')


api.get('/todo/tasks/:id', controller.find);
api.get('/todo/tasks', controller.all);
api.put('/todo/tasks', controller.update);
api.post('/todo/tasks', controller.create);
api.delete('/todo/tasks/:id', controller.remove);