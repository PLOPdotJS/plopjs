'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'changeme';

const User = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

User.methods.hashPassword = function(){
  return bcrypt.hashSync(this.password, 8);
};

User.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

User.methods.generateToken = function(){
  return jwt.sign({_id:this._id}, secret);
};

module.exports = mongoose.model('user', User);
