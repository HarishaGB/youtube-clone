import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function VideoPageIconsDisLiked() {
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
    paddingTop: '0.25rem',
    paddingRight: '0.1875rem',
    paddingBottom: '0.1875rem',
    paddingLeft: '0.18731rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  group: {
    width: '1.12519rem',
    height: '1.0625rem',
    flexShrink: 0,
  },
});
