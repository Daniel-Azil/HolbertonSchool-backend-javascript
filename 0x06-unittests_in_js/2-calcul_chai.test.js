const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./calculateNumber');

describe('calculateNumber', function() {

  it('should return 6 when SUM of 2.4 and 3.5 is rounded', function() {
    const result = calculateNumber('SUM', 2.4, 3.5);
    expect(result).to.equal(6);
  });

  it('should return 0 when SUBTRACT of 2.3 and 2.8 is rounded', function() {
    const result = calculateNumber('SUBTRACT', 2.3, 2.8);
    expect(result).to.equal(0);
  });

  it('should return 5 when SUM of 2.6 and 2.4 is rounded', function() {
    const result = calculateNumber('SUM', 2.6, 2.4);
    expect(result).to.equal(5);
  });

  it('should return -2 when SUBTRACT of 1.2 and 3.7 is rounded', function() {
    const result = calculateNumber('SUBTRACT', 1.2, 3.7);
    expect(result).to.equal(-2);
  });

  it('should return 2 when DIVIDE of 3.7 and 2.3 is rounded', function() {
    const result = calculateNumber('DIVIDE', 3.7, 2.3);
    expect(result).to.equal(2);
  });

  it('should return "Error" when DIVIDE by 0 after rounding', function() {
    const result = calculateNumber('DIVIDE', 1.7, 0);
    expect(result).to.equal('Error');
  });
});
