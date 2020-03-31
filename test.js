var assert = chai.assert;

describe('Opdracht #1', function() {
  describe('isPositief(getal)', function() {
    it('Geeft true bij positief getal', function() {
      assert.equal(isPositief(1), true);
      assert.equal(isPositief(9), true);

    });
    it('Geeft true bij 0', function() {
      assert.equal(isPositief(0), true, "isPositief moet bij 0 true teruggeven.");
    });
    it('Geeft false bij negatief getal', function() {
      assert.equal(isPositief(-1), false);
      assert.equal(isPositief(-59), false);
    });
  });
});

describe('Opdracht #2', function() {
  describe('som(a, b)', function() {
    it('Geeft som bij twee positieve getallen', function() {
      assert.equal(som(1, 2), 3);
    });
    it('Geeft som bij twee negatieve getallen', function() {
      assert.equal(som(-1, -2), -3);
    });
    it('Geeft som bij positief en negatief getal', function() {
      assert.equal(som(-1, 2), 1);
    });
    it('Geeft som bij 0', function() {
      assert.equal(som(0, 0), 0);
    });
  });
});
