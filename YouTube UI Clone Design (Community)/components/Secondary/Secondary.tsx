import {StyleSheet, View} from 'react-native';
import {TopMenuItem} from '../../components/TopMenuItem';
import {Video} from '../../components/Video';
import theme from '../../theme';

export function Secondary() {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.topMenu}>
          <TopMenuItem/>
          <TopMenuItem/>
        </View>
        <View style={styles.videos}>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
          <Video/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '26.625rem',
    height: '60.5rem',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  content: {
    paddingTop: '1.5rem',
    paddingRight: '1.5rem',
    paddingBottom: '0rem',
    paddingLeft: '0rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  topMenu: {
    width: '25.125rem',
    paddingTop: '0.0625rem',
    paddingRight: '0.75rem',
    paddingBottom: '0.125rem',
    paddingLeft: '0rem',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  videos: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
