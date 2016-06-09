'use strict';

const chai = require('chai');
const expect = chai.expect;

// const fs = require('fs-extra');

const init = require(__dirname + '/../lib/init');

describe('should test the init functionality', () => {
  it('should recognize init as a function', () => {
    expect(init).to.eql.function;
  });
});
