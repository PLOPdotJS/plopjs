'use strict';

const fs = require('fs-extra');
const questions = require('./init-questions.json');

//If you find yourself nesting callbacks this deep it's a good time
//to start thinking about handling async some other way. If you were
//to use promises for instance you could have even taken all of those
//"if (err)" conditionals to that single catch at the end.

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
          //Unless you have a very specific reason that you need to use sync I'd
          //use async everywhere you can and I think you could have here. If you're
          //worried about nesting try something else for async.
          let newPlop = fs.readdirSync('./');
          for (var i = 0; i < newPlop.length; i++){
            this.log(newPlop[i]);
          }
          this.log('\nChange directories into your template and start building your plop template!');
        });
      });
    });
  }).catch(err => this.log(err));
  //I'm guessing that this is something that vorpal needs you to pass in so since it's
  //waiting on a prompt it's probably not too important, but calling this callback here
  //wouldn't wait on your async calls.
  callback();
};

module.exports = exports = init;
