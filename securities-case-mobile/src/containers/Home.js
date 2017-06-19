import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react/native';

import InstrumentsStore from '../stores/InstrumentsStore';
import { InstrumentList } from '../components';
import { commonStyles } from '../helpers/theme';

@observer
export default class Home extends Component {
  static propTypes = {
    instrumentsStore: PropTypes.instanceOf(InstrumentsStore),
  };

  render() {
    const {
      dataSource,
      priceFetchDiffSeconds,
    } = this.props.instrumentsStore;

    let priceTimeInfo;
    if (priceFetchDiffSeconds > 10) {
      priceTimeInfo = `Prices fetched ${priceFetchDiffSeconds} seconds ago`;
    } else {
      priceTimeInfo = 'Prices are up to date!';
    }

    return (
      <View style={styles.container}>
        <Text style={styles.priceTimeInfo}>{priceTimeInfo}</Text>
        <InstrumentList style={commonStyles.card} instruments={dataSource} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 8,
  },
  priceTimeInfo: {
    textAlign: 'center',
    marginBottom: 8,
  },
});
