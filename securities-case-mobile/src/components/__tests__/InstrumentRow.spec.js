import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import InstrumentRow from '../InstrumentRow';

it('renders correctly', () => {
  const snapshot = renderer
    .create(
      <InstrumentRow code={'Ing'} price={10.44} priceDiffPercentage={-0.41} />
    )
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
