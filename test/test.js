'use strict';

const chai = require('chai');
const expect = chai.expect;
<<<<<<< HEAD
// const should = require('chai').should();
const request = require('chai').request;
//
const install = require(__dirname + '/../lib/vorpal-install');

=======

const install = require(__dirname + '/../lib/vorpal-install');

>>>>>>> 9e01998b1c3b237085d3aa1a6d476c3e674b721c
describe('install unit test', () => {
  it('should validate the install function of plopjs', () => {
    expect(install).to.be.function;
  });
});
