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
    GIT.Clone(template, process.env.HOME + '/.config/plop/' + rename)
      .catch((err)=>{
        console.error('Failed to install template');
        return err;
      }); /* IGNORE .git!!! */
    callback();
    //error handling prompt for existing template overwrite.
  });

vorpal.command('use [template_name] [destination_path]', 'copies a plop template (by filename) you have saved into your working directory')
  .action(function(args, callback){
    let template_name = args.template_name;
    let template_path = process.env.HOME + '/.config/plop/' + template_name + '/template';
    let destination_path = args.destination_path || './';
    fs.copy(template_path, destination_path, (err)=>{
      if (err) return new Error('Failed to copy template to your project.');
    });
    callback();
  });

vorpal.command('delete [template_name]', 'removes a locally saved plop template')
  .action(function(args, callback){
    let template_path = process.env.HOME + '/.config/plop/' + args.template_name;
    fs.remove(template_path, (err)=>{
      if (err) return new Error('Deletion Failure');
    });
    callback();
  });
//rimraf or dell

vorpal.command('init [template_name]', 'walks you through building a plop template')
//mkdirp

vorpal.command('list', 'displays a list of templates saved locally')
  .action(function(args, callback){
    fs.readdir(process.env.HOME + '/.config/plop/', (err, files)=>{
      if (err) return new Error('Failed to find templates');
      if (files.length < 1) console.error('You have no templates saved locally');
      for (var i = 0; i < files.length; i++){
        this.log(files[i]);
      }
    });
    callback();
  });
