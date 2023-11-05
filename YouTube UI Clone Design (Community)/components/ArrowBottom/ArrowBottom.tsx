import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function ArrowBottom() {
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
    paddingTop: '0.54375rem',
    paddingRight: '0.3625rem',
    paddingBottom: '0.51875rem',
    paddingLeft: '0.35rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
  },
  group: {
    width: '0.7875rem',
    height: '0.4375rem',
    flexShrink: 0,
  },
});
