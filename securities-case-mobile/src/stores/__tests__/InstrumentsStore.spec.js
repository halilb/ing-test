import InstrumentsStore from '../InstrumentsStore';

const fakeTime = 1497888703132;
const ingData = {
  code: 'ING',
  price: {
    amount: 20,
    when: fakeTime,
  },
};
const appleData = {
  code: 'AAPL',
  price: {
    amount: 124.3434234,
    when: fakeTime,
  },
};

// dummy transport layer object
const transportLayer = {
  initializeSocket: () => {},
  fetchInstruments: () => {
    return [ingData, appleData];
  },
};
let store;

Date.now = jest.fn(() => fakeTime);

// re-create InstrumentsStore
beforeEach(() => {
  store = new InstrumentsStore(transportLayer, fakeTime);
});

it('creates dataSource array correctly', () => {
  expect(Array.isArray(store.dataSource)).toBe(true);
});

it('calculates priceFetchDiffSeconds correctly', () => {
  const diffSeconds = 14;
  const currentFakeTime = fakeTime + diffSeconds * 1000;
  store.lastPriceFetchTime = currentFakeTime;

  store.lastPriceFetchTime = currentFakeTime;

  expect(store.priceFetchDiffSeconds).toBe(diffSeconds);
});

it('parses instrument data correctly', () => {
  const { code, amount, when } = store.parseInstrumentData(ingData);

  expect(code).toBe(ingData.code);
  expect(amount).toBe(ingData.price.amount);
  expect(when).toBe(ingData.price.when);
});

it('loads intruments correctly', async () => {
  const instruments = await store.loadInstruments();
  const firstInstrument = instruments[0];
  const secondInstruemnt = instruments[1];

  expect(instruments.length).toBe(2);

  expect(firstInstrument.code).toBe(ingData.code);
  expect(firstInstrument.initialPrice).toBe(ingData.price.amount);
  expect(firstInstrument.price).toBe(ingData.price.amount);
  expect(firstInstrument.lastPriceTime).toBe(ingData.price.when);

  expect(secondInstruemnt.code).toBe(appleData.code);
  expect(secondInstruemnt.initialPrice).toBe(appleData.price.amount);
  expect(secondInstruemnt.price).toBe(appleData.price.amount);
  expect(secondInstruemnt.lastPriceTime).toBe(appleData.price.when);
});

it('updates instrument price correctly', () => {
  const priceDiffPercentage = 10;
  const ingAmount = ingData.price.amount;
  const newIngPrice = ingAmount + ingAmount / priceDiffPercentage;
  const newWhen = 1497888206136;
  store.updateInstrumentPrice({
    ...ingData,
    price: {
      amount: newIngPrice,
      when: newWhen,
    },
  });

  const ingInstrument = store.instruments[0];
  expect(ingInstrument.price).toBe(newIngPrice);
  expect(ingInstrument.lastPriceTime).toBe(newWhen);
  // initalPrice shouldn't change
  expect(ingInstrument.initialPrice).toBe(ingAmount);
  expect(ingInstrument.priceDiffPercentage).toBe(priceDiffPercentage);

  // testing negative percantage
  const appleAmount = appleData.price.amount;
  const newApplePrice = appleAmount - appleAmount / priceDiffPercentage;
  store.updateInstrumentPrice({
    ...appleData,
    price: {
      amount: newApplePrice,
    },
  });

  const appleInstrument = store.instruments[1];
  expect(appleInstrument.price).toBe(newApplePrice);
  expect(appleInstrument.priceDiffPercentage).toBe(priceDiffPercentage * -1);
});
