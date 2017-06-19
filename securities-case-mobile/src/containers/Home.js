import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react/native';

import InstrumentsStore from '../stores/InstrumentsStore';
import { InstrumentList } from '../components';

@observer
export default class Home extends Component {
  static propTypes = {
    instrumentsStore: PropTypes.instanceOf(InstrumentsStore),
  };

  render() {
    const {
      dataSource,
      lastPriceFetchDate,
    } = this.props.instrumentsStore;

    return (
      <View>
        <Text>{lastPriceFetchDate.toString()}</Text>
        <InstrumentList instruments={dataSource} />
      </View>
    );
  }
}
