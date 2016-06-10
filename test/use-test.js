'use strict';

const chai = require('chai');
const expect = chai.expect;
const use = require(__dirname + '/../lib/use');

describe('should test the functionality of use', () => {
  it('should identify use as a function', () => {
    expect(use).to.eql.function;
  });
});
