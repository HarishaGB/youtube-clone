import {StyleSheet, View} from 'react-native';
import {NavigationsProfile} from '../../components/NavigationsProfile';
import {Notifications} from '../../components/Notifications';
import {Apps} from '../../components/Apps';
import {Create} from '../../components/Create';
import theme from '../../theme';

export function NavigationsProfile() {
  return (
    <View style={styles.root}>
      <NavigationsProfile/>
      <View style={styles.navigationsNotifications}>
        <Notifications/>
      </View>
      <View style={styles.navigationsApps}>
        <Apps/>
      </View>
      <View style={styles.navigationsCreate}>
        <Create/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '12.75rem',
    height: '2.5rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '0.5rem',
    flexDirection: 'row',
  },
  navigationsNotifications: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.5rem',
  },
  navigationsApps: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.5rem',
  },
  navigationsCreate: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.5rem',
  },
});
