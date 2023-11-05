import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Notifications() {
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
    paddingTop: '0.1225rem',
    paddingBottom: '0.125rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingHorizontal: '0.25rem',
  },
  group: {
    width: '1rem',
    height: '1.2525rem',
    flexShrink: 0,
  },
});
