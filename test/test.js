'use strict';

const chai = require('chai');
const expect = chai.expect;

// const should = require('chai').should();
const request = require('chai').request;
//
const install = require(__dirname + '/../lib/vorpal-install');

describe('install unit test', () => {
  it('should validate the install function of plopjs', () => {
    expect(install).to.be.function;
  });
});
