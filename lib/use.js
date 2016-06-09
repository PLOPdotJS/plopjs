'use strict';

const fs = require('fs-extra');

const use = function(args, callback){
  let template_name = args.template_name;
  let template_path = process.env.HOME + '/.config/plop/' + template_name + '/template';
  let destination_path = args.destination_path || './';
  let existingPlops = fs.readdirSync(process.env.HOME + '/.config/plop/');
  if (existingPlops.indexOf(template_name) === -1) {
    this.log(`${template_name} does not exist.\nUse 'list' to see existing plop templates.`);
  }
  fs.copy(template_path, destination_path, (err)=>{
    if (err) return new Error('Failed to copy plop template to your project.');
    this.log('You now have a new plop template in your project.');
  });
  callback();
};

module.exports = exports = use;
