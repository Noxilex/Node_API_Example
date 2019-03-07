# Node_API_Example
Basic node application implementing express &amp; mongo to serve an API.

# Generate package automaticaly

Yoman - Permet de faire la génération automatique de projet

# Outil pour générer la doc

Swagger -  https://www.swagger.io

# Tendance des API (futur)

GraphQL - https://graphql.org/

# HTML Templating language 

Jade - http://jade-lang.com/
Pug - https://pugjs.org/
Ejs - https://www.ejs.co/

### Useful

- If there is a file index.js in a folder, it while use it as default
`const controllers = require('../controllers')`

- **How do you know which collection is used by the API ?**
`var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);`
The first argument is the **singular name (collection 'tasks' -> 'Task')** of the collection your model is for. Mongoose automatically looks for the plural, lowercased version of your model name. Thus, for the example above, the model Tank is for the tanks collection in the database. **!mongoose specific!**

- **Winston log doc**
https://www.npmjs.com/package/winston#logging-levels