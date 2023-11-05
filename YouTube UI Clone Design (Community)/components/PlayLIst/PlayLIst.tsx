import {StyleSheet, View, Text} from 'react-native';
import {XsmallVideo} from '../../components/XsmallVideo';
import {SidebarIconsPlay} from '../../components/SidebarIconsPlay';
import theme from '../../theme';

export function PlayLIst() {
  return (
    <View style={styles.root}>
      <View style={styles.border}/>
      <View style={styles.content}>
        <View style={styles.videoCard}>
          <XsmallVideo/>
          <XsmallVideo/>
          <XsmallVideo/>
          <XsmallVideo/>
          <XsmallVideo/>
        </View>
        <View style={styles.playLIst}>
          <View style={styles.title}>
            <Text style={styles.searchOn21}>
              Search On ‘21
            </Text>
          </View>
          <View style={styles.playBtn}>
            <SidebarIconsPlay/>
            <View style={styles.playAll2}>
              <Text style={styles.playAll}>
                Play all
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.border2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: '0rem',
    paddingHorizontal: '4.0625rem',
  },
  border: {
    width: '66.875rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  content: {
    width: '66.875rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  videoCard: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '1.5rem',
    paddingHorizontal: '0rem',
  },
  searchOn21: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  playLIst: {
    paddingTop: 8,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    paddingTop: '0.5625rem',
    paddingRight: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  playAll: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textTransform: 'uppercase',
  },
  playBtn: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '0.375rem',
    paddingHorizontal: '1rem',
  },
  playAll2: {
    paddingTop: '0.1875rem',
    paddingRight: '0rem',
    paddingBottom: '0.125rem',
    paddingLeft: '0.5rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  border2: {
    width: '66.875rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
});
