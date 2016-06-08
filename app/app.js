'use strict';

const vorpal = require('vorpal')();


vorpal.delimiter('plop$').show();

const use = require(__dirname + '/../lib/vorpal-use');
const install = require(__dirname + '/../lib/vorpal-install');
const del = require(__dirname + '/../lib/vorpal-delete');
const list = require(__dirname + '/../lib/vorpal-list');
const init = require(__dirname + '/../lib/vorpal-init');

vorpal.command('install [template_repo_url] [rename]', 'clones a plop template from github into your ~/.config/plop/ directory')
  .action(install);


vorpal.command('use [template_name] [destination_path]', 'copies a plop template (by filename) you have saved into your working directory')
  .action(use);

vorpal.command('delete [template_name]', 'removes a locally saved plop template')
  .action(del);


vorpal.command('init [template_name]', 'walks you through building a plop template')
  .action(init);


vorpal.command('list', 'displays a list of templates saved locally')
  .action(list);

const exit = vorpal.find('exit');
exit.alias('k');
