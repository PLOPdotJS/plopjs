'use strict';

const vorpal = require('vorpal')();


vorpal.delimiter('plop$').show();

const use = require(__dirname + '/../lib/vorpal-use');
const install = require(__dirname + '/../lib/vorpal-install');
const del = require(__dirname + '/../lib/vorpal-delete');
const list = require(__dirname + '/../lib/vorpal-list');
const init = require(__dirname + '/../lib/vorpal-init');

vorpal.command('install [template_repo_url] [rename]', 'clones a plop template from github into your ~/.config/plop/ directory')

  .action(function(args, callback){
    let template = args.template_repo_url;
    let rename = args.rename;

    //if stuff?
    //TODO: clone stuff without .git
    GIT.Clone(template, process.env.HOME + '/.config/plop/' + rename); /* IGNORE .git!!! */
    callback();
    //error handling prompt for existing template overwrite.
  });

vorpal.command('use [template] [path]', 'copies a plop template (by filename) you have saved into your working directory')
  .action(function(args, callback){
    let template = args.template;
    template = process.env.HOME + '/.config/plop/' + template;
    let destination = args.path || './';
    fs.copy(template, destination, (err)=>{
      if (err) return new Error('Fuck');
      console.log('yeah', template, destination);
    });
  });

vorpal.command('delete [template]', 'removes a locally saved plop template')
<<<<<<< HEAD

=======
=======
  .action(install);


vorpal.command('use [template_name] [destination_path]', 'copies a plop template (by filename) you have saved into your working directory')
  .action(use);

vorpal.command('delete [template_name]', 'removes a locally saved plop template')
  .action(del);
<<<<<<< HEAD
>>>>>>> a6752530376dba167cf734d2e50ee95e92a83f4d
>>>>>>> master
//rimraf or dell
=======

>>>>>>> 8fdc72b94967da3649b1b1edd699a9a4156afa49

vorpal.command('init [template_name]', 'walks you through building a plop template')
  .action(init);


vorpal.command('list', 'displays a list of templates saved locally')
  .action(list);

const exit = vorpal.find('exit');
exit.alias('k');
