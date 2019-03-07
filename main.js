const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const auth = require('./middlewares/auth-token-query')
const config = require('./config.json')

// Utils
jsonUtils = require('./utils/json')
logger = require('./utils/logger')
password = require('./utils/password')
jwtUtils = require('./utils/jwt')

// Database
mongoose = require('mongoose')
require('mongoose-type-email')
mongoose.Promise = require('bluebird');
const dbUrl = `mongodb://${config.dbDomain}:${config.dbPort}/${config.dbTable}`;
mongoose.connect(dbUrl, {
    useNewUrlParser: true
})

// Application 
app = express();
api = express.Router();

// Middlewares
app.use('/api', api);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
api.use(bodyParser.json())
app.use(morgan('tiny'));


// Routing
require('./routes');


app.listen(3000);