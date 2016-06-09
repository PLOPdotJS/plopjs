'use strict';

const fs = require('fs-extra');

const save = function(args, callback){
  let template_warning = false;
  let full_WD = process.env.PWD;
  let short_WD = full_WD.split('/').pop();
  if (short_WD === 'template'){
    this.log('Exit the plop CLI and `cd ..` out of template.\nYou will want to save your whole template directory, your README.md, and your plop.json.\nCan\'t do that from here!');
    template_warning = true;
  }
  let plop_name = args.name || short_WD;
  let contents = fs.readdirSync('./');
  if (contents.indexOf('plop.json') == -1 && !template_warning){
    this.log('You are not saving a valid plop template. Verify your working directory.');
  } else if (contents.indexOf('plop.json') != -1) {
    fs.copy('./', process.env.HOME + '/.config/plop/' + plop_name + '/');
  }
  callback();
};

module.exports = exports = save;
