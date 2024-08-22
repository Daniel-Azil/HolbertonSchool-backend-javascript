const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {

    it("should return 4 when adding 1 and 3", function() {
      const res = calculateNumber(1, 3);
      assert.strictEqual(res, 4);
    });
    it("should return 5 when adding 1 and 3.7", function() {
      const res = calculateNumber(1, 3.7);
      assert.strictEqual(res, 5);
    });
    it("should return 5 when adding 1.2 and 3.7", function() {
      const res = calculateNumber(1.2, 3.7);
      assert.strictEqual(res, 5);
    });
    it("should return -6 when adding 1.5 and 3.7", function() {
      const res = calculateNumber(1.5, 3.7);
      assert.strictEqual(res, -6);
    });
});
