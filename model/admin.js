'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || 'changeme';

const Admin = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
});

Admin.methods.hashPassword = function(){
  return bcrypt.hashSync(this.password, 8);
};

Admin.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password);
};

Admin.methods.generateToken = function(){
  return jwt.sign({_id:this._id}, secret);
};

module.exports = mongoose.model('admin', Admin);
