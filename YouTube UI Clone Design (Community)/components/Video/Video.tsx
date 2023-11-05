import {StyleSheet, View, Text} from 'react-native';
import {ThumbnailImages} from '../../components/ThumbnailImages';
import theme from '../../theme';

export function Video() {
  return (
    <View style={styles.root}>
      <View style={styles.thumbnail}>
        <ThumbnailImages/>
      </View>
      <View style={styles.videoText}>
        <Text style={styles.ep6LivingToServeSearchOn}>
          Ep 6: Living to Serve | SEARCH ON
        </Text>
        <View style={styles.channelDesc}>
          <View style={styles.channelName}>
            <Text style={styles.jamesGouse}>
              James Gouse
            </Text>
          </View>
          <View style={styles.channelViews}>
            <Text style={styles.$1MViews3YearsAgo}>
              1M views . 3 years ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    paddingTop: 8,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  thumbnail: {
    paddingRight: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
  },
  ep6LivingToServeSearchOn: {
    width: '12.625rem',
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem /* 142.857% */',
  },
  jamesGouse: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.125rem /* 150% */',
  },
  videoText: {
    width: '14.125rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: '0.4375rem',
    paddingHorizontal: '0rem',
  },
  channelDesc: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: '0.125rem',
    paddingHorizontal: '0rem',
  },
  channelName: {
    width: '12.625rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  $1MViews3YearsAgo: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.125rem /* 150% */',
  },
  channelViews: {
    width: '12.625rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
});
