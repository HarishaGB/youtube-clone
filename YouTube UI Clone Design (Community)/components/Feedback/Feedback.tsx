import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Feedback() {
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
    paddingVertical: '0.125rem',
    paddingHorizontal: '0.25rem',
  },
  group: {
    width: '1rem',
    height: '1.25rem',
    flexShrink: 0,
  },
});
