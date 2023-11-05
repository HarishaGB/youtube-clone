import {StyleSheet, View, Text} from 'react-native';
import theme from '../../theme';

export function SidebarMenuTitle() {
  return (
    <View style={styles.root}>
      <View style={styles.subscriptions2}>
        <Text style={styles.subscriptions}>
          SUBSCRIPTIONS
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '14rem',
    height: '2rem',
    paddingRight: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  subscriptions: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  subscriptions2: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    paddingVertical: '0.5rem',
    paddingHorizontal: '1.5rem',
  },
});
