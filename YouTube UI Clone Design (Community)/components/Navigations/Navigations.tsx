import {StyleSheet, View} from 'react-native';
import {Hamburger} from '../../components/Hamburger';
import {YoutubeLogo} from '../../components/YoutubeLogo';
import {NavigationsSearchBox} from '../../components/NavigationsSearchBox';
import {NavigationsProfile} from '../../components/NavigationsProfile';
import theme from '../../theme';

export function Navigations() {
  return (
    <View style={styles.root}>
      <View style={styles.navigationsYtButton}>
        <View style={styles.navigationsYtButtonIcon}>
          <Hamburger/>
        </View>
        <View style={styles.navigationsYtButtonLogo}>
          <YoutubeLogo/>
        </View>
      </View>
      <NavigationsSearchBox/>
      <NavigationsProfile/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '90rem',
    height: '3.5rem',
    backgroundColor: theme.colors.background.color,
  },
  navigationsYtButton: {
    display: 'inline-flex',
    paddingRight: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigationsYtButtonIcon: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.5rem',
  },
  navigationsYtButtonLogo: {
    paddingRight: '0.875rem',
    paddingLeft: '1rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingVertical: '1.125rem',
  },
});
