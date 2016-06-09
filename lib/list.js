'use strict';

const fs = require('fs-extra');

const list = function(args, callback){
  fs.readdir(process.env.HOME + '/.config/plop/', (err, files)=>{
    if (err) return new Error('Failed to find templates.');
    if (files.length < 1) console.error('You have no templates saved locally.');
    for (var i = 0; i < files.length; i++){
      this.log(files[i]);
    }
  });
  callback();
};

module.exports = exports = list;
