import {StyleSheet, View, Text} from 'react-native';
import theme from '../../theme';

export function FooterItemsItem() {
  return (
    <View style={styles.root}>
      <Text style={styles.terms}>
        Terms
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    paddingRight: 0,
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  terms: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
});
