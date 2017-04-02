'use strict';

const chai = require('chai');
const assert = chai.assert;

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      const website = require(`${__dirname}/../src/website`)('example');
      assert.isNotNull(website.config);
    });
  });
});
