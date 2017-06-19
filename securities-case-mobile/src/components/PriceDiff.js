import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PriceDiff = ({ diff }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: diff < 0 ? '#F1374A' : '#55EDB5',
        },
      ]}
    >
      <Text style={styles.diff}>{diff}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 52,
    alignItems: 'center',
    borderRadius: 2,
    paddingVertical: 2,
  },
  diff: {
    color: 'white',
    fontSize: 12,
  },
});

PriceDiff.propTypes = {
  diff: PropTypes.number.isRequired,
};

export default PriceDiff;
