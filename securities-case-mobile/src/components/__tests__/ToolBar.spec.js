import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ToolBar from '../ToolBar';

it('renders a ToolBar correctly', () => {
  const snapshot = renderer.create(<ToolBar title={'Instruments'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
