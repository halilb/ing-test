import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.71,
    padding: 8,
  },
  rowSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgb(200, 199, 204)',
    marginLeft: 8,
  },
});

export { commonStyles };
