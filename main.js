const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const auth = require('./middlewares/auth-token-query')

// Database
mongoose = require('mongoose')
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://noxilex.ovh:27017/aston', {
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