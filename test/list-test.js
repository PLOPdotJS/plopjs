'use strict';

const chai = require('chai');
const expect = chai.expect;

const list = require(__dirname + '/../lib/list');

describe('should test the list functionality', () => {
  it('should identify list as a function', () => {
    expect(list).to.eql.function;
  });

  it('should identify list type', () => {
  });
});
