import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Mic() {
  return (
    <View style={styles.root}>
      <Group/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '1.5rem',
    height: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingVertical: '0.1875rem',
    paddingHorizontal: '0.34375rem',
  },
  group: {
    width: '0.8125rem',
    height: '1.125rem',
    flexShrink: 0,
  },
});
