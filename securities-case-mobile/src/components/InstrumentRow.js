import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import PriceDiff from './PriceDiff';
import { commonStyles } from '../helpers/theme';

const InstrumentRow = ({ code, price, priceDiffPercentage }) => (
  <View style={styles.container}>
    <Text style={styles.code}>{code}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.price}>{price}</Text>
      <PriceDiff diff={priceDiffPercentage} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  code: {
    flex: 1,
    fontWeight: 'bold',
  },
  priceContainer: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#B8B8B8',
    marginRight: 8,
  },
});

InstrumentRow.propTypes = {
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceDiffPercentage: PropTypes.number.isRequired,
};

export default InstrumentRow;
