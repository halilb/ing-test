export default class Instrument {
  /**
   * code is the unique identifier for the instrument.
   */
  code = null;

  /*
   * instrument's initial price is used to calculate
   * difference with it's current price.
   * it is immutable.
   */
  initialPrice = null;

  /*
   * current price of the instrument.
   */
  price = null;

  constructor(code, price) {
    this.code = code;
    this.initialPrice = price;
    this.price = price;
  }
}
