import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function ArrowTop() {
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
    paddingTop: '0.51875rem',
    paddingBottom: '0.5375rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingHorizontal: '0.35rem',
  },
  group: {
    width: '0.8rem',
    height: '0.44375rem',
    flexShrink: 0,
  },
});
