'use strict';

const GIT = require('nodegit');

const install = function(args, callback){
  let template = args.template_repo_url;
  let rename = args.rename;
  //if stuff?
  //TODO: clone stuff without .git
  GIT.Clone(template, process.env.HOME + '/.config/plop/' + rename)
    .catch((err)=>{
      console.error('Failed to install template');
      return err;
    }); /* IGNORE .git!!! */
  callback();
  //error handling prompt for existing template overwrite.
};

module.exports = exports = install;
