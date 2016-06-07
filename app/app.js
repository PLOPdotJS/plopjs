'use strict';

const fs = require('fs-extra');
const vorpal = require('vorpal')();
const GIT = require('nodegit');

vorpal.delimiter('plop$').show();

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
//rimraf or dell

vorpal.command('init [template]', 'walks you through building a plop template')
//mkdirp

vorpal.command('list', 'displays a list of templates saved locally')
