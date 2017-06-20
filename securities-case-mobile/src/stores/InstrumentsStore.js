import { action, computed, observable, runInAction, useStrict } from 'mobx';
import Instrument from '../models/Instrument';

// allow mutations only in @action blocks
useStrict(true);

export default class InstrumentsStore {
  /*
   * The helper reference that'll manage API requests for us
   */
  transportLayer = null;
  /*
   * main list that holds Instrument instances
   */
  @observable instruments = null;

  /*
   * this is used to calculate priceFetchDiffSeconds
   */
  @observable lastPriceFetchTime = null;

  constructor(transportLayer, lastPriceFetchTime) {
    this.transportLayer = transportLayer;
    this.instruments = [];
    this.lastPriceFetchTime = lastPriceFetchTime;

    this.loadInstruments();
    this.transportLayer.initializeSocket(this.updateInstrumentPrice);
  }

  // moves amount and when properties to the top level
  parseInstrumentData = data => {
    const { code, price } = data;
    const { amount, when } = price;
    return { code, amount, when };
  };

  @action updateInstrumentPrice = data => {
    const { code, amount, when } = this.parseInstrumentData(data);
    const instrument = this.instruments.find(i => i.code === data.code);

    if (instrument) {
      instrument.price = amount;
      instrument.lastPriceTime = when;
      this.lastPriceFetchTime = Date.now();
    }
  };

  @action loadInstruments = async () => {
    const data = await this.transportLayer.fetchInstruments();
    const newInstruments = data.map(d => {
      const { code, amount, when } = this.parseInstrumentData(d);
      return new Instrument(code, amount, when);
    });

    runInAction('update instrument list after fetching network data', () => {
      this.instruments.replace(newInstruments);
      this.lastPriceFetchTime = Date.now();
    });

    return newInstruments;
  };

  // using dataSource to normalize observable array
  @computed get dataSource() {
    // updating an instrument instance price does not invoke this block weirdly.
    // so, I'm adding lastPriceFetchTime reference here as an ugly hack to invoke this.
    // one other solution is to recreate Instrument instance when price changes,
    // and I think that's even uglier.
    // I hope to change this when I find a better way.
    console.log(this.lastPriceFetchTime);
    return this.instruments.slice();
  }

  // used to display an information message whether the prices are up to date or not
  @computed get priceFetchDiffSeconds() {
    return (this.lastPriceFetchTime - Date.now()) / 1000;
  }
}
