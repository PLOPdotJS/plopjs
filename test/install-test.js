'use strict';

const chai = require('chai');
const expect = chai.expect;

const install = require(__dirname + '/../lib/vorpal-install');

describe('install unit test', () => {
  it('should validate the install function of plopjs', () => {
    expect(install).to.be.function;
  });

  it('should properly rename the input to filename if not customized as second arg', () => {
    let template = 'https://github.com/PLOPdotJS/fourteenCarrots.git';
    let default_name = template.split('/').slice(-1).join().slice(0, -4);
    expect(default_name).to.eql('fourteenCarrots');
  });

  it('should have the incorrect name to NOT EQUAL the default', () => {
    let template = 'https://github.com/PLOPdotJS/plopjs.git';
    let default_name = template.split('/').slice(-1).join().slice(0, -4);
    expect(default_name).to.not.eql('plops');
  });
});
