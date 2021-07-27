const path = require('path');
const express = require('express');
const app = express();

app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

const logHandler = require('./utils/logHandler');
const errorHandler = require('./utils/errorHandler');
app.use(logHandler);
app.use(errorHandler);

const router = require('./routes');
router(app);

module.exports = app;