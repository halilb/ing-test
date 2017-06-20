import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import InstrumentsStore from '../../stores/InstrumentsStore';
import Home from '../Home';

// dummy transport layer object
const transportLayer = {
  initializeSocket: () => {},
};

it('renders a Home container correctly', () => {
  const fakeTime = 1497888703132;
  // mocking Date.now to make priceFetchDiffSeconds work
  Date.now = jest.fn(() => fakeTime);

  const store = new InstrumentsStore(transportLayer, fakeTime);
  const snapshot = renderer.create(<Home instrumentsStore={store} />).toJSON();

  expect(snapshot).toMatchSnapshot();
});

it('displays latest price fetch time correctly if it is older than 10 seconds', () => {
  const fakeTime = 1497888703132;
  // fakeTime is 11 seconds later than Date.now
  Date.now = jest.fn(() => fakeTime - 11 * 1000);

  const store = new InstrumentsStore(transportLayer, fakeTime);
  const snapshot = renderer.create(<Home instrumentsStore={store} />).toJSON();

  expect(snapshot).toMatchSnapshot();
});
