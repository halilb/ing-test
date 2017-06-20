import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Instrument from '../../models/Instrument';
import InstrumentList from '../InstrumentList';

it('renders an empty list correctly', () => {
  const snapshot = renderer
    .create(
      <InstrumentList style={{ backgroundColor: 'red' }} instruments={[]} />
    )
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});

it('renders instruments correctly', () => {
  const IngInsturement = new Instrument('ING', 14.523253412, 1497888536011);
  const AppleInstrument = new Instrument('AAPL', 258.3693474, 1497888703132);

  const snapshot = renderer
    .create(<InstrumentList instruments={[IngInsturement, AppleInstrument]} />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
