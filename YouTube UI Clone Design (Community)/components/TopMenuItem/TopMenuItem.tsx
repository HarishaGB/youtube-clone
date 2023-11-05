import {StyleSheet, View, Text} from 'react-native';
import theme from '../../theme';

export function TopMenuItem() {
  return (
    <View style={styles.root}>
      <View style={styles.topMenuButton}>
        <Text style={styles.all}>
          All
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    paddingRight: '0.75rem',
    paddingLeft: '1.5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingVertical: '0.75rem',
  },
  all: {
    color: '#030303',
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  topMenuButton: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    backgroundColor: '#FFF',
    paddingVertical: '0.5rem',
    paddingHorizontal: '0.75rem',
    borderRadius: '2rem',
  },
});
