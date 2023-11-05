import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Queue() {
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
    paddingTop: '0.4375rem',
    paddingBottom: '0.3125rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingHorizontal: '0.125rem',
  },
  group: {
    width: '1.25rem',
    height: '0.75rem',
    flexShrink: 0,
  },
});
