#!/usr/bin/env node
'use strict';

const vorpal = require('vorpal')();

vorpal.delimiter('plop$').show();


const use = require(__dirname + '/lib/vorpal-use');
const install = require(__dirname + '/lib/vorpal-install');
const del = require(__dirname + '/lib/vorpal-delete');
const list = require(__dirname + '/lib/vorpal-list');
const init = require(__dirname + '/lib/vorpal-init');
const save = require(__dirname + '/lib/save');


vorpal.command('install [template_repo_url] [rename]', 'clones a plop template from github into your ~/.config/plop/ directory. Can also use `i`.')
  .action(install).alias('i');

vorpal.command('use [template_name] [destination_path]', 'copies a plop template (by filename) you have saved into your working directory.')
  .action(use);

vorpal.command('delete [template_name]', 'removes a locally saved plop template.')
    .action(del);

vorpal.command('init [template_name]', 'walks you through building a plop template.')
  .action(init);

vorpal.command('list', 'displays a list of templates saved locally. Can also use `ls`.')
  .action(list).alias('ls');

vorpal.command('save [name]', 'saves a locally created plop template to your ~/.config/plop/ directory. Can also use `s`.')
  .action(save).alias('s');

const exit = vorpal.find('exit');
exit.alias('k').alias('q');
exit.description('exits the plop CLI. Can also use `k` or `q`.')
