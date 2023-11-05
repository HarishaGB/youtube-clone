import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Report() {
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
    paddingRight: '0.25rem',
    paddingLeft: '0.3125rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingVertical: '0.1875rem',
  },
  group: {
    width: '0.9375rem',
    height: '1.125rem',
    flexShrink: 0,
  },
});
