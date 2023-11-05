import {StyleSheet, View, Text} from 'react-native';
import {YoutubePlayer} from '../../components/YoutubePlayer';
import theme from '../../theme';

export function SmalVideo() {
  return (
    <View style={styles.root}>
      <View style={styles.player}>
        <YoutubePlayer/>
      </View>
      <View style={styles.videoDesc}>
        <View style={styles.videoTitle}>
          <View style={styles.title2}>
            <Text style={styles.title}>
              Blind Woodturner: Turning passion into fine art
            </Text>
          </View>
          <View style={styles.time2}>
            <Text style={styles.time}>
              576,969 views . 3 weeks ago
            </Text>
          </View>
        </View>
        <View style={styles.descriptions}>
          <Text style={styles.desc}>
            Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    paddingRight: '17.9375rem',
    paddingLeft: '4.0625rem',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '1.5rem',
  },
  player: {
    paddingRight: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
  },
  title: {
    color: theme.colors.white.color,
    fontVariantNumeric: 'stacked-fractions',
    fontFeatureSettings: '\'hlig\' on, \'dlig\' on',
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    letterSpacing: '0.00875rem',
  },
  videoDesc: {
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  videoTitle: {
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title2: {
    paddingBottom: 0,
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  time: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  time2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  desc: {
    width: '25rem',
    flexShrink: 0,
    color: theme.colors.white.color,
    fontVariantNumeric: 'stacked-fractions',
    fontFeatureSettings: '\'hlig\' on, \'dlig\' on',
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '0.00875rem',
  },
  descriptions: {
    width: '25rem',
    height: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
