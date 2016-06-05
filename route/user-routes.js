'use strict';

const express = require('express');
const jsonParser = require('body-parser').json();
const User = require(__dirname + '/../model/user');

const userRouter = module.exports = exports = express.Router();

userRouter.get('/', (req, res) => {
  User.find({}, (err, data) => {
    if(err) return({msg: err.message});
    res.status(200).json(data);
  });
});
