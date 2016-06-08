'use strict';

const fs = require('fs-extra');

const use = function(args, callback){
  let template_name = args.template_name;
  let template_path = process.env.HOME + '/.config/plop/' + template_name + '/template';
  let destination_path = args.destination_path || './';
  fs.copy(template_path, destination_path, (err)=>{
    if (err) return new Error('Failed to copy template to your project.');
  });
  callback();
};

module.exports = exports = use;
