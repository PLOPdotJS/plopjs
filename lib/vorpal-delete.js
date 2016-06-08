'use strict';

const fs = require('fs-extra');

const del = function(args, callback){
  let template_path = process.env.HOME + '/.config/plop/' + args.template_name;
  fs.remove(template_path, (err)=>{
    if (err) return new Error('Deletion Failure');
  });
  callback();
};
//rimraf or dell

module.exports = exports = del;
