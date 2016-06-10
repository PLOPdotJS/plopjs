'use strict';

const chai = require('chai');
const expect = chai.expect;

const fs = require('fs-extra');

const Plop = require('../plop.js');

const del = require(__dirname + '/../lib/delete');

describe('should test delete functionality', () => {
  it('should recognize the delete function', () => {
    expect(del).to.eql.function;
  });
});

if (process.env.HOME != '/home/travis') {
  describe('delete tests with before blocks', () => {
    let plopCountWithDeleteMe;
    let originalPlopCount;
    before(() => {
      originalPlopCount = fs.readdirSync(process.env.HOME + '/.config/plop/').length;
      fs.mkdirsSync(process.env.HOME + '/.config/plop/deleteMe');
      plopCountWithDeleteMe = fs.readdirSync(process.env.HOME + '/.config/plop/').length;
    });
    it('should delete a plop template', () => {
      expect(fs.readdirSync(process.env.HOME + '/.config/plop/').length).to.eql(plopCountWithDeleteMe);
      Plop.execSync('delete deleteMe');
    });
    it('should delete a plop template for reals', () => {
      expect(fs.readdirSync(process.env.HOME + '/.config/plop/').length).to.eql(originalPlopCount);
    });
  });
}
