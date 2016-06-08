'use strict';

const chai = require('chai');
const expect = chai.expect;
 
const install = require(__dirname + '/../lib/vorpal-install');

describe('install unit test', () => {
  it('should validate the install function of plopjs', () => {
    expect(install).to.be.function;
    // expect(install[function]).to.have.property('template');
  });
});
