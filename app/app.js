'use strict';

const fs = require('fs');
const vorpal = require('vorpal')();
const GIT = require('nodegit');

vorpal.delimiter('plop$').show();

vorpal.command('install [template] [rename]', 'clones a plop template from github into your ~/.config/plop/ directory')
  .action(function(args, callback){
    let template = args.template;
    let rename = args.rename;
  });

vorpal.command('use [template]', 'copies a plop template you have saved into your working directory')

vorpal.command('delete [template]', 'removes a locally saved plop template')
