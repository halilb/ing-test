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

  /*
   * price update time,
   * provided by the API.
   */
  lastPriceTime = null;

  constructor(code, price, lastPriceTime) {
    this.code = code;
    this.initialPrice = price;
    this.price = price;
    this.lastPriceTime = lastPriceTime;
  }
}
