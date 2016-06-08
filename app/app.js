'use strict';

const fs = require('fs-extra');
const vorpal = require('vorpal')();
const GIT = require('nodegit');
const initPrompt = require('./init-prompt');

vorpal.delimiter('plop$').show();

vorpal.command('install [template_repo_url] [rename]', 'clones a plop template from github into your ~/.config/plop/ directory')
  .action(function(args, callback){
    let template = args.template_repo_url;
    let default_name = template.split('/').slice(-1).join().slice(0, -4);
    let rename = args.rename || default_name;
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
  .action(function(args, callback){
      let jsonStuff;
      this.prompt([
        {
          type: 'input',
          name: 'Name',
          default: false,
          message: 'Template name? '
        },
        {
          type: 'input',
          name: 'Description',
          default: false,
          message: 'Description? '
        },
        {
          type: 'input',
          name: 'Author',
          default: false,
          message: 'Author? '
        },
        {
          type: 'input',
          name: 'License',
          default: false,
          message: 'License? '
        },
        {
          type: 'input',
          name: 'Version',
          default: false,
          message: 'Version? '
        }
      ])
    .then((answers)=>{
      jsonStuff = JSON.stringify(answers);
      fs.outputFile('./plop.json', jsonStuff, (err)=>{
        if (err) this.log(err);
        fs.ensureFile('./README.md', (err)=>{
          if (err) this.log(err);
          fs.mkdirs('./template', (err)=>{
            if (err) this.log(err);
            this.log('Here is your plop.json, README.md, and template directory: \n');
            let newPlop = fs.readdirSync('./');
            for (var i = 0; i < newPlop.length; i++){
              this.log(newPlop[i]);
            }
            this.log('\nChange directories into your template and start building your plop!');
          });
        });
      });
    }).catch(err => this.log(err));
    callback();
  });


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

const exit = vorpal.find('exit');
exit.alias('k');
