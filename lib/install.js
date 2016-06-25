'use strict';

const GIT = require('nodegit');
const fs = require('fs-extra');

const install = function(args, callback){
  let template = args.template_repo_url;
  let default_name = template.split('/').pop().slice(0, -4);
  let rename = args.rename || default_name;
  fs.mkdirsSync(process.env.HOME + '/.config/plop/');
  let existingPlops = fs.readdirSync(process.env.HOME + '/.config/plop/');
  if (existingPlops.indexOf(rename) == -1) {
    GIT.Clone(template, process.env.HOME + '/.config/plop/' + rename)
    .then((repo) => {
      if (repo) this.log(`Files have been plopped into ~/.config/plop/${rename}.`);
    })
    .catch((err)=>{
      this.log(new Error(err));
      return err;
    });
  } else {
    //Break strings this long down to multiple lines, you can do so by concatenating.
    this.log(new Error(`Failed to install plop template because ~/.config/plop/${rename} already exists.\nPlease try again with different name.`));
  }
  callback();
};

module.exports = exports = install;
