import {StyleSheet, View, Text} from 'react-native';
import {VideoPageIconsLiked} from '../../components/VideoPageIconsLiked';
import theme from '../../theme';

export function Button() {
  return (
    <View style={styles.root}>
      <View style={styles.buttonBtn}>
        <VideoPageIconsLiked/>
      </View>
      <View style={styles.buttonText}>
        <Text style={styles.$17K}>
          1.7K
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '0.125rem',
    paddingHorizontal: '0rem',
  },
  buttonBtn: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.375rem',
  },
  $17K: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textTransform: 'uppercase',
  },
  buttonText: {
    paddingRight: '0.375rem',
    paddingLeft: '0rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    paddingVertical: '0.625rem',
  },
});
