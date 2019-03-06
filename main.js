const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// Database
mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/aston', {
    useNewUrlparser: true
})

// Application 
app = express();
api = express.Router();
const auth = require('./middlewares/auth-token-query')

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth("1234"));
app.use(morgan('tiny'));

// Routing
require('./routes');


app.listen(3000);