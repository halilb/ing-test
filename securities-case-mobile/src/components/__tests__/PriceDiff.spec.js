import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import PriceDiff from '../PriceDiff';

it('renders a negative diff correctly', () => {
  const snapshot = renderer.create(<PriceDiff diff={-0.44} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

it('renders a positive diff correctly', () => {
  const snapshot = renderer.create(<PriceDiff diff={2.32} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

it('renders zero diff correctly', () => {
  const snapshot = renderer.create(<PriceDiff diff={0} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
