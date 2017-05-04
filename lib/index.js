module.exports = {
  bottles: 0,

  caps: 0,

  pops: 0,

  bottleRecycling: 0,

  capRecycling: 0,

  price: 2,

  purchase: function(money) {
    // we dont care about changes lol
    var num = Math.floor(money / this.price);
    this.pops = num;
    this.bottles = num;
    this.caps = num;
  },

  exchange: function() {
    var numB = Math.floor(this.bottles / 2);
    var numC = Math.floor(this.caps / 4);
    while (numB > 0 || numC > 0) {
      // exchange bottles
      if (numB > 0) {
        this.bottles -= numB * 2;
        this.bottleRecycling += numB;
        this.bottles += numB;
        this.caps += numB;
      }
      // exchange caps
      if (numC > 0) {
        this.caps -= numC * 4;
        this.capRecycling += numC;
        this.bottles += numC;
        this.caps += numC;
      }

      // calculate new
      numB = Math.floor(this.bottles / 2);
      numC = Math.floor(this.caps / 4);
    }
  },

  redeem: function(money) {
    this.purchase(money);
    this.exchange();
    return this.pops + this.bottleRecycling + this.capRecycling;
  },

  print: function() {
    console.log("pops:", this.pops,
      "bottles:", this.bottles,
      "caps:", this.caps,
      "bottleRecycling:", this.bottleRecycling,
      "capRecycling:", this.capRecycling);
  },

  init: function(){
    this.bottles = 0;
    this.caps = 0;
    this.pops = 0;
    this.bottleRecycling = 0;
    this.capRecycling = 0;
  }
};