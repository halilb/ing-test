import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './containers/Home';
import { ToolBar } from './components';

import InstrumentsStore from './stores/InstrumentsStore';

const instrumentsStoreInstance = new InstrumentsStore();
const App = () => (
  <View style={styles.container}>
    <ToolBar title={'Instruments'} />
    <Home instrumentsStore={instrumentsStoreInstance} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
