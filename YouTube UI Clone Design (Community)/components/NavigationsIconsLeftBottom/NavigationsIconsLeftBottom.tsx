import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function NavigationsIconsLeftBottom() {
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
    paddingTop: '0.2475rem',
    paddingBottom: '0.24844rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
    paddingHorizontal: '0.46594rem',
  },
  group: {
    width: '0.56813rem',
    height: '1.00406rem',
    flexShrink: 0,
  },
});
