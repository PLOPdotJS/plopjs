'use strict';

const chai = require('chai');
const expect = chai.expect;

const fs = require('fs-extra');

const del = require(__dirname + '/../lib/delete');

describe('should properly handle the delete functionality for plops', () => {
  it('should recognize the delete function', () => {
    expect(del).to.eql.function;
  });

  it('should fully remove the template path', () => {
    let template_path = process.env.HOME + '/.config/plop/';
    fs.remove(template_path, (err)=>{
      if (err) return new Error('Deletion Failure');
    });
    expect(template_path).to.eql.null;
  });
});
