import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import { PropTypes } from 'prop-types';

import InstrumentRow from './InstrumentRow';

export default class InstrumentList extends PureComponent {
  static propTypes = {
    instruments: PropTypes.array,
  };

  keyExtractor = item => item.code;

  renderItem = ({ item }) => {
    return (
      <InstrumentRow
        key={`instrument_${item.code}`}
        id={item.code}
        code={item.code}
        price={item.price}
      />
    );
  };

  render() {
    const { instruments } = this.props;

    return (
      <View>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={instruments}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
