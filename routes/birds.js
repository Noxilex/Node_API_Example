/**
 * Todo Routes
 */

// Gets the behavior we want for each route
const controller = require('../controllers/todo')

api.get('/birds/:id', controller.find);
api.get('/birds/', controller.all);
api.post('/birds/', controller.create);
api.put('/birds', controller.update);
api.delete('/birds', controller.remove);