import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function VideoPageIconsDropdown() {
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
    paddingTop: '0.3125rem',
    paddingBottom: '0.375rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '0.1875rem',
  },
  group: {
    width: '1.125rem',
    height: '0.8125rem',
    flexShrink: 0,
  },
});
