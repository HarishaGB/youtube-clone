import {StyleSheet, View, Text} from 'react-native';
import {ThumbnailImages} from '../../components/ThumbnailImages';
import theme from '../../theme';

export function XsmallVideo() {
  return (
    <View style={styles.root}>
      <ThumbnailImages/>
      <View style={styles.videoDesc}>
        <View style={styles.title2}>
          <Text style={styles.title}>
            Lorem ipsum dolor sit amet, consecte...
          </Text>
        </View>
        <View style={styles.views}>
          <View style={styles.channelName}>
            <Text style={styles.marcusLevin}>
              Marcus Levin
            </Text>
          </View>
          <View style={styles.channelViews}>
            <Text style={styles.$329KViews1MonthAgo}>
              329K views . 1 month ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '13.375rem',
    paddingRight: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    width: '11.625rem',
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
  },
  videoDesc: {
    width: '11.625rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title2: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    paddingVertical: '0.5rem',
    paddingHorizontal: '0rem',
  },
  marcusLevin: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  views: {
    width: '11.625rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  channelName: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  $329KViews1MonthAgo: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  channelViews: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
});
