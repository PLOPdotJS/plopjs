'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const errHandle = require(__dirname + '/lib/error-handling');
const dbPort = process.env.MONGODB_URI || 'mongodb://localhost/plop_db';
console.log('dbPort', dbPort);

mongoose.connect(dbPort);

const adminRoutes = require('./route/admin-routes');
const godRoutes = require('./route/god-routes');
const userRoutes = require('/route/user-routes');

app.use('/', adminRoutes);
app.use('/', godRoutes);
app.use('/', userRoutes);

app.use(errHandle);

app.use((req, res) => {
  res.status(404).json({message: 'page not found'});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('up on ' + dbPort);
});
