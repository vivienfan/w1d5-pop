var assert = require("chai").assert;
var redeem = require("../lib/index");

describe("Popping Bottles", function() {
  beforeEach(function() {
    redeem.init();
  });

  it ("With $20 investment, customer should get \n\
      10 bottles of pops by purchasing,\n\
      17 bottles of pops by bottle recycling,\n\
      8 bottles of pops by cap recycling.", function() {
    redeem.redeem(20);
    assert.isTrue(redeem.pops === 10);
    assert.isTrue(redeem.bottleRecycling === 17);
    assert.isTrue(redeem.capRecycling === 8);
  });

  it("With $4 investment, customer should get \n\
      2 bottles of pops by purchasing, \n\
      1 bottles of pops by bottle recycling, \n\
      0 bottles of pops by cap recycling.", function() {
    redeem.redeem(4);
    assert.isTrue(redeem.pops === 2);
    assert.isTrue(redeem.bottleRecycling === 1);
    assert.isTrue(redeem.capRecycling === 0);
  });
});