'use strict';

const GIT = require('nodegit');

const install = function(args, callback){
  let template = args.template_repo_url;
  let default_name = template.split('/').slice(-1).join().slice(0, -4);
  let rename = args.rename || default_name;
  GIT.Clone(template, process.env.HOME + '/.config/plop/' + rename)
    .catch((err)=>{
      console.error('Failed to install template');
      return err;
    });
  callback();
};

module.exports = exports = install;
