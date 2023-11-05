import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function YoutubeLogo() {
  return (
    <View style={styles.root}>
      <Group/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '5.625rem',
    height: '1.25rem',
    paddingRight: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  group: {
    width: '5.59925rem',
    height: '1.25rem',
    flexShrink: 0,
  },
});
