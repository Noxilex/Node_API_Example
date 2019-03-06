const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const auth = require('./middlewares/auth-token-query')

// Database
mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true
})

// Application 
app = express();
api = express.Router();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'));


// Routing
app.use('/api', api);
require('./routes');


app.listen(3000);