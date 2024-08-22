const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {
    it("should return 6 for SUM of 1.4 and 4.5", function() {
      const res = calculateNumber("SUM", 1.4, 4.5);
      assert.strictEqual(res, 6);
    });
    it("should return -4 for SUBTRACT of 1.4 and 4.5", function() {
      const res = calculateNumber("SUBTRACT", 1.4, 4.5);
      assert.strictEqual(res, -4);
    });
    it("should return 0.2 for DIVIDE of 1.4 by 4.5", function() {
      const res = calculateNumber('DIVIDE', 1.4, 4.5);
      assert.strictEqual(res, 0.2);
    });
    it("should return 'Error' for DIVIDE by 0", function() {
      const res = calculateNumber('DIVIDE', 1.4, 0);
      assert.strictEqual(res, "Error");
    });
});
