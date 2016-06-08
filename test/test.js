'use strict';

const chai = require('chai');
const expect = chai.expect;
<<<<<<< HEAD
const should = require('chai').should();
=======


//
>>>>>>> bc3dbdba8d1a9e6d1f9f9b71eb6845bc4e96efde
const install = require(__dirname + '/../lib/vorpal-install');

describe('install unit test', () => {
  it('should validate the install function of plopjs', () => {
    expect(install).to.be.function;
    expect(install).to.have.property('template');
  });
});
