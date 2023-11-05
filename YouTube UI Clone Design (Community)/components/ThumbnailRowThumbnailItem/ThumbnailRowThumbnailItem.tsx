import {StyleSheet, View, Text} from 'react-native';
import {ThumbnailImages} from '../../components/ThumbnailImages';
import {UserAvatar} from '../../components/UserAvatar';
import theme from '../../theme';

export function ThumbnailRowThumbnailItem() {
  return (
    <View style={styles.root}>
      <ThumbnailImages/>
      <View style={styles.thumnail}>
        <View style={styles.thumbnailProfilePic}>
          <UserAvatar/>
        </View>
        <View style={styles.thumbnailDesc}>
          <View style={styles.thumbnailDescTitle}>
            <Text style={styles.loremIpsumDolorSitAmetConsecteAdipiscingElit}>
              Lorem ipsum dolor sit amet, consecte 
              adipiscing elit.
            </Text>
          </View>
          <View style={styles.thumbnailDescInfo}>
            <Text style={styles.chanelName}>
              James Gouse
            </Text>
            <Text style={styles.time}>
              15K Views .1 week ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '17.25rem',
    height: '15.4375rem',
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  thumnail: {
    width: '15.75rem',
    height: '4.625rem',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexDirection: 'row',
  },
  thumbnailProfilePic: {
    paddingTop: '0.75rem',
    paddingRight: '0.75rem',
    paddingBottom: '1.625rem',
    paddingLeft: '0rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  loremIpsumDolorSitAmetConsecteAdipiscingElit: {
    width: '12.75rem',
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  thumbnailDesc: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.375rem',
  },
  thumbnailDescTitle: {
    paddingTop: 12,
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  chanelName: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  time: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  thumbnailDescInfo: {
    width: '12.75rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
