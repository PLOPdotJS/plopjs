'use strict';

const fs = require('fs-extra');
const questions = require('./init-questions.json');

const init = function(args, callback){
  let jsonStuff;
  this.prompt(questions)
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
