/**
 * Default routes
 */

//If there is a file index.js in a folder, it while use it as default
const controllers = require('../controllers')

app.get('/', controllers.home)

//Routes
//Ex: blog.js contains our blog routes -> require('./blog')
require('./todo');
