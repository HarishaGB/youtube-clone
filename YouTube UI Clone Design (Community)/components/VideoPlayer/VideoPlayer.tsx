import {StyleSheet, View, Text} from 'react-native';
import {YoutubePlayer} from '../../components/YoutubePlayer';
import {Button} from '../../components/Button';
import theme from '../../theme';

export function VideoPlayer() {
  return (
    <View style={styles.root}>
      <YoutubePlayer/>
      <View style={styles.videoInfo}>
        <View style={styles.border}/>
        <View style={styles.videoInfo2}>
          <View style={styles.title2}>
            <Text style={styles.title}>
              Blind Woodturner: Turning passion into fine art
            </Text>
          </View>
          <View style={styles.info}>
            <View style={styles.infoText}>
              <Text style={styles.time}>
                576,969 views . Oct 8, 2021
              </Text>
            </View>
            <View style={styles.topLevel}>
              <Button/>
              <Button/>
              <Button/>
              <Button/>
              <Button/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '40rem',
    height: '28.4375rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  border: {
    width: '40rem',
    height: '0.0625rem',
    backgroundColor: theme.colors.border.color,
  },
  title: {
    color: theme.colors.white.color,
    fontVariantNumeric: 'stacked-fractions',
    fontFeatureSettings: '\'hlig\' on, \'dlig\' on',
    fontFamily: 'Roboto',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '0.01125rem',
  },
  videoInfo: {
    width: '40rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  videoInfo2: {
    paddingTop: '1.25rem',
    paddingBottom: '0.5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: '0rem',
  },
  title2: {
    paddingTop: '0.1875rem',
    paddingBottom: '0.125rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    paddingHorizontal: '0rem',
  },
  time: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  info: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '5.6875rem',
    flexDirection: 'row',
  },
  infoText: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    paddingVertical: '0.75rem',
    paddingHorizontal: '0rem',
  },
  topLevel: {
    alignItems: 'flex-start',
    gap: '0.5rem',
    flexDirection: 'row',
  },
});
