const express = require('express');

const notesRouter = require('./notes');

const app = express();

app.use('/index', notesRouter);

module.exports = app;