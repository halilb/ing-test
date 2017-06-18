import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ToolBar = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#44D4D7',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

ToolBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ToolBar;
