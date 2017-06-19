import { action, computed, observable, useStrict } from 'mobx';
import Instrument from '../models/Instrument';

useStrict(true);

export default class InstrumentsStore {
  /*
   * main list that holds Instrument instances
   */
  @observable instruments = null;

  /*
   * this is used to display the latest price fetching date.
   * it can also be used to display a warning when price data is stale.
   */
  @observable lastPriceFetchDate = null;

  constructor() {
    this.instruments = [];
    this.lastPriceFetchDate = new Date();

    this.createDummyInstrument();
    setInterval(this.updateDummyPrices, 1000);
  }

  @action updateDummyPrices = () => {
    const firstInstrument = this.instruments[0];
    firstInstrument.price = Math.random();
    this.lastPriceFetchDate = new Date();
  };

  @action createDummyInstrument = () => {
    const newInstrument = new Instrument('test', 30);
    this.instruments.push(newInstrument);
  };

  // using dataSource to normalize observable array
  @computed get dataSource() {
    // updating an instrument instance price does not invoke this block weirdly.
    // so, I'm adding lastPriceFetchDate reference here as an ugly hack to invoke this.
    // one other solution is to recreate Instrument instance when price changes,
    // and I think that's even uglier.
    // I hope to change this when I find a better way.
    console.log(this.lastPriceFetchDate);
    return this.instruments.slice();
  }
}
