const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false , limit : '11mb'}));

app.use(express.static('public'))

app.use('/api' , require('./routes/api'));

module.exports = app;
