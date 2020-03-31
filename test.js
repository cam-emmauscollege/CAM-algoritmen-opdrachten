var assert = require('assert');

var opdracht1 = require('../opdracht-1');

describe('Opdracht #1', function() {
  describe('isPositief(getal)', function() {
    it('Geeft true bij positief getal', function() {
      assert.equal(opdracht1.isPositief(1), true);
      assert.equal(opdracht1.isPositief(9), true);

    });
    it('Geeft true bij 0', function() {
      assert.equal(opdracht1.isPositief(0), false);
    });
    it('Geeft false bij negatief getal', function() {
      assert.equal(opdracht1.isPositief(-1), false);
      assert.equal(opdracht1.isPositief(-59), false);
    });
  });
});
