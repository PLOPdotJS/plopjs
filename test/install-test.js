'use strict';

const chai = require('chai');
const expect = chai.expect;
const fs = require('fs-extra');
const Plop = require('../plop.js');


const install = require(__dirname + '/../lib/install');

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

describe('install tests with before block', ()=>{
  let originalPlopCount;
  let plopDir = process.env.HOME + '/.config/plop/';
  let testRepo = 'https://github.com/PLOPdotJS/plop-test.git';
  before(()=>{
    originalPlopCount = fs.readdirSync(plopDir).length;
    Plop.execSync(`install ${testRepo} testingTesting`);
  });
  after(()=>{
    Plop.execSync('delete testingTesting');
  });
  it('should have one more plop template in ~/.config/plop', ()=>{
    expect(fs.readdirSync(plopDir).length).to.eql(originalPlopCount + 1);
  });
  it('should have a directory named testingTestingin ~/.config/plop', ()=>{
    expect(fs.readdirSync(plopDir).indexOf('testingTesting')).to.not.eql(-1);
  });
});
