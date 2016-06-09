'use strict';

const fs = require('fs-extra');

const del = function(args, callback){
  for (var i = 0; i < args.template_name.length; i++){
    let template_path = process.env.HOME + '/.config/plop/' + args.template_name[i];
    fs.remove(template_path, (err)=>{
      if (err) this.log(new Error('Deletion failure'));
    });
  }
  callback();
};

module.exports = exports = del;
