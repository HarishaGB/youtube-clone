import {StyleSheet, View} from 'react-native';
import {SidebarMenu} from '../../components/SidebarMenu';
import {SidebarMenuTitle} from '../../components/SidebarMenuTitle';
import {FooterItemsItem} from '../../components/FooterItemsItem';
import theme from '../../theme';

export function Sidebar() {
  return (
    <View style={styles.root}>
      <View style={styles.sidebarTop}>
        <SidebarMenu/>
        <SidebarMenu/>
        <SidebarMenu/>
      </View>
      <View style={styles.sidebarTop2}>
        <View style={styles.border}/>
        <View style={styles.frame1}>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
        </View>
        <View style={styles.border2}/>
      </View>
      <View style={styles.sidebarSubscriptions}>
        <View style={styles.frame2}>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenuTitle/>
        </View>
        <View style={styles.border3}/>
      </View>
      <View style={styles.sidebarMoreFrom}>
        <View style={styles.frame3}>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenuTitle/>
        </View>
        <View style={styles.border4}/>
      </View>
      <View style={styles.navigationsBottom}>
        <View style={styles.frame4}>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
          <SidebarMenu/>
        </View>
        <View style={styles.border5}/>
      </View>
      <View style={styles.navigationsFooter}>
        <View style={styles.footerItems}>
          <View style={styles.frame8}>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
          </View>
        </View>
        <View style={styles.footerItems2}>
          <View style={styles.frame9}>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
            <FooterItemsItem/>
          </View>
        </View>
        <View style={styles.footerItems3}>
          <FooterItemsItem/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '15rem',
    height: '87.1875rem',
    paddingTop: '0rem',
    paddingRight: '1rem',
    paddingBottom: '2.625rem',
    paddingLeft: '0rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background.color,
  },
  sidebarTop: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: '0.75rem',
    paddingHorizontal: '0rem',
  },
  border: {
    width: '14rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  sidebarTop2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  frame1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  border2: {
    width: '14rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  sidebarSubscriptions: {
    paddingTop: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  frame2: {
    width: '14rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  border3: {
    width: '14rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  sidebarMoreFrom: {
    paddingTop: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  frame3: {
    width: '14rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  border4: {
    width: '14rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  navigationsBottom: {
    paddingTop: 12,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
  },
  frame4: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  border5: {
    width: '14rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  navigationsFooter: {
    width: '14rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  footerItems: {
    width: '14rem',
    paddingTop: '1rem',
    paddingBottom: '0rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingHorizontal: '1.5rem',
  },
  frame8: {
    width: '9.25rem',
    height: '2.8125rem',
  },
  footerItems2: {
    width: '14rem',
    paddingTop: '0.75rem',
    paddingBottom: '0rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingHorizontal: '1.5rem',
  },
  frame9: {
    width: '11.8125rem',
    height: '2.8125rem',
  },
  footerItems3: {
    width: '14rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingVertical: '1rem',
    paddingHorizontal: '1.5rem',
  },
});
