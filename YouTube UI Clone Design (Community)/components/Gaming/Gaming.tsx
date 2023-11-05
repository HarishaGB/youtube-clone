import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Gaming() {
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
    paddingRight: '0.1275rem',
    paddingLeft: '0.125rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingVertical: '0.25rem',
  },
  group: {
    width: '1.2475rem',
    height: '1rem',
    flexShrink: 0,
  },
});
