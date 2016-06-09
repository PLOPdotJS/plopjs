'use strict';

const chai = require('chai');
const expect = chai.expect;

const fs = require('fs-extra');

const del = require(__dirname + '/../lib/delete');

describe('should test delete functionality', () => {
  it('should recognize the delete function', () => {
    expect(del).to.eql.function;
  });
});
