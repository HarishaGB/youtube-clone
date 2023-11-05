import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function VideoPageIconsSave() {
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
    paddingVertical: '0.4375rem',
    paddingHorizontal: '0.125rem',
  },
  group: {
    width: '1.25rem',
    height: '0.625rem',
    flexShrink: 0,
  },
});
