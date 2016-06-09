'use strict';

const chai = require('chai');
const expect = chai.expect;

const save = require(__dirname + '/../lib/save');

describe('should properly test the save useability', () => {
  it('should identify save as a function', () => {
    expect(save).to.eql.function;
  });
});
