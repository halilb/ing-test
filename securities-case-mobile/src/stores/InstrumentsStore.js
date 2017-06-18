import { action, observable, useStrict } from 'mobx';
import Instrument from '../models/Instrument';

useStrict(true);

export default class InstrumentsStore {
  @observable instruments = [];

  constructor() {
    this.loadInstruments();
  }

  loadInstruments() {
    setTimeout(this.createDummyInstrument, 2000);
  }

  @action createDummyInstrument = () => {
    const newInstrument = new Instrument('test', 30);
    this.instruments.push(newInstrument);
  };
}
