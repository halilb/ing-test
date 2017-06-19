import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const InstrumentRow = ({ code, price }) => (
  <View style={styles.container}>
    <Text>Code: {code}</Text>
    <Text>Price: {price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {},
});

InstrumentRow.propTypes = {
  code: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default InstrumentRow;
