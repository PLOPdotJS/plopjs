'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs-extra');
const list = require(__dirname + '/../lib/list');

describe('should test the list functionality', () => {
  it('should identify list as a function', () => {
    expect(list).to.eql.function;
  });
  //this test doesn't test anything.
  it('should identify list type', () => {
    let files = [];
    for(var i = 0; i < files.length; i++) {
      this.log(files[i]);
      expect(files).to.eql.Array;
      expect(files).to.gte(0);
    }
  });

  //Here's an example of a way you could have tested your list function:

  // let backUpHome;
  // before((done) => {
  //   //backup your HOME property so you don't mess up other tests.
  //   backUpHome = process.env.HOME;
  //   //set home to __dirname which should be the test directory
  //   process.env.HOME = __dirname;
  //   //create the directory that list expects to see
  //   fs.mkdirs(__dirname + '/.config/plop', err => {
  //     if (err) throw err;
  //     //put a file there for list to pick up
  //     fs.writeFile(__dirname + '/.config/plop/test.txt','', err => {
  //       if (err) throw err;
  //       done();
  //     });
  //   });
  // });

  // after((done) => {
  //   //reset HOME
  //   process.env.HOME = backUpHome;
  //   //clean up your mock .config
  //   fs.remove(__dirname + '/.config', err => {
  //     if (err) throw err;
  //     done();
  //   });
  // });

  // it('should log files', (done) => {
  //   //The toughest part of your list function as it stands is that it refers
  //   //to something on 'this' remember that context is a moving target
  //   //and you can tell it to point somewhere else just like anything
  //   //else.

  //   //make an object with a log function that checks what's being passed in,
  //   //tests it, and calls done.
  //   let mockThis =  {
  //     log: function(args) {
  //       expect(args).to.eql('test.txt');
  //       done();
  //     }
  //   };

  //   //Here's the tricky part:
  //   //.call is a method on the function prototype that calls a function.
  //   //the first argument you pass in is what the value of 'this' will be
  //   //inside that function. That means that whereever your list function
  //   //calls this.log (lines: 7, 8, and 10) 'this' will be the mockThis
  //   //object we just created and this.log will call the function we just
  //   //wrote and pass in the arguments. The other arguments are the arguments
  //   //that get passed into that function. So args and callback respectively.
  //   list.call(mockThis, [], function(){});
  // });

});
