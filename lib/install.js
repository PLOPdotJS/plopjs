'use strict';

const GIT = require('nodegit');

const install = function(args, callback){
  let template = args.template_repo_url;
  let default_name = template.split('/').pop().slice(0, -4);
  let rename = args.rename || default_name;
  GIT.Clone(template, process.env.HOME + '/.config/plop/' + rename)
    .then((repo) => {
      if (repo) this.log(`Files have been plopped into ~/.config/plop/${rename}.`);
    })
    .catch((err)=>{
      err = `Failed to install template because ~/.config/plop/${rename} already exists.\nPlease try again with different name.`;
      console.error(err);
      return err;
    });
  callback();
};

module.exports = exports = install;
