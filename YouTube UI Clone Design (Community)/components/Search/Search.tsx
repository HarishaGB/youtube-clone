import {StyleSheet, View} from 'react-native';
import Group from '../../assets/vectors/Group.svg';
import theme from '../../theme';

export function Search() {
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
    paddingTop: '0.1875rem',
    paddingRight: '0.19563rem',
    paddingBottom: '0.195rem',
    paddingLeft: '0.1875rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
  },
  group: {
    width: '1.11688rem',
    height: '1.1175rem',
    flexShrink: 0,
  },
});
