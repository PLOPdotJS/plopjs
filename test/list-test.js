'use strict';

const chai = require('chai');
const expect = chai.expect;

const list = require(__dirname + '/../lib/list');

describe('should test the list functionality', () => {
  it('should identify list as a function', () => {
    expect(list).to.eql.function;
  });

  it('should identify list type', () => {
    let files = [];
    for(var i = 0; i < files.length; i++) {
      this.log(files[i]);
      expect(files).to.eql.Array;
      expect(files).to.gte(0);
    }
  });
});
