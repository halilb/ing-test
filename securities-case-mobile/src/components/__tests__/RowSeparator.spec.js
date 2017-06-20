import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import RowSeparator from '../RowSeparator';

it('renders a row separator correctly', () => {
  const snapshot = renderer.create(<RowSeparator />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
