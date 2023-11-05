import {StyleSheet, View, Text} from 'react-native';
import {HomeFill} from '../../components/HomeFill';
import theme from '../../theme';

export function SidebarMenu() {
  return (
    <View style={styles.root}>
      <View style={styles.sidebarMenuItem}>
        <View style={styles.sidebarMenuIcon}>
          <HomeFill/>
        </View>
        <View style={styles.sidebarMenuTitle}>
          <Text style={styles.home}>
            Home
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    paddingRight: '0.5rem',
    paddingLeft: '1.5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingVertical: '0.5rem',
  },
  sidebarMenuItem: {
    width: '12rem',
    alignItems: 'flex-start',
    gap: '1.5rem',
    flexDirection: 'row',
  },
  sidebarMenuIcon: {
    width: '1.5rem',
    height: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
  },
  home: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  sidebarMenuTitle: {
    width: '9rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexShrink: 0,
    flexDirection: 'row',
    paddingVertical: '0.25rem',
    paddingHorizontal: '0rem',
  },
});
