'use strict';

const fs = require('fs-extra');

const del = function(args, callback){
  let template_path;
  for (var i = 0; i < args.template_name.length; i++){
    template_path = process.env.HOME + '/.config/plop/' + args.template_name[i];
    fs.remove(template_path, (err)=>{
      if (err) this.log(new Error('Deletion failure.'));
    });
  }
  this.log(args.template_name.length > 1 ? 'Plop templates deleted.' : 'Plop template deleted.');
  callback();
};

module.exports = exports = del;
