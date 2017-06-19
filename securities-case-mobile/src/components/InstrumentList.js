import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import { PropTypes } from 'prop-types';

import InstrumentRow from './InstrumentRow';
import RowSeparator from './RowSeparator';

export default class InstrumentList extends PureComponent {
  static propTypes = {
    instruments: PropTypes.array,
    style: View.propTypes.style,
  };

  keyExtractor = item => item.code;

  renderItem = ({ item }) => {
    const { code, roundedPrice, priceDiffPercentage } = item;
    return (
      <InstrumentRow
        key={`instrument_${code}`}
        id={code}
        code={code}
        price={roundedPrice}
        priceDiffPercentage={priceDiffPercentage}
      />
    );
  };

  render() {
    const { style, instruments } = this.props;

    return (
      <FlatList
        style={style}
        keyExtractor={this.keyExtractor}
        data={instruments}
        renderItem={this.renderItem}
        ItemSeparatorComponent={RowSeparator}
      />
    );
  }
}
