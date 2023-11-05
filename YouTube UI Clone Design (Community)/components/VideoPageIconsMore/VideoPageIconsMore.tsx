import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function VideoPageIconsMore() {
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
    flexDirection: 'row',
    paddingVertical: '0rem',
    paddingHorizontal: '0.28125rem',
  },
  group: {
    width: '0.9375rem',
    height: '0.1875rem',
    flexShrink: 0,
  },
});
