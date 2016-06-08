'use strict';

const fs = require('fs-extra');

const init = function(args, callback){
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
          this.log('Here is your README.md, plop.json and template directory: \n');
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
};

module.exports = exports = init;
