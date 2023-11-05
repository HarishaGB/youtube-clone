import {StyleSheet, View, Text, Image} from 'react-native';
import image1 from '../../assets/images/image1.png';
import theme from '../../theme';

export function ThumbnailImages() {
  return (
    <View style={styles.root}>
      <View style={styles.thumbnailImages}>
        <Image source={{uri: image1}} style={{width: 276, height: 155}} contentFit="cover"/>
      </View>
      <View style={styles.videoTime2}>
        <Text style={styles.videoTime}>
          23:45
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '17.25rem',
    height: '9.6875rem',
    backgroundColor: '#FFF',
  },
  image1: {
    width: '17.25rem',
    height: '9.6875rem',
    flexShrink: 0,
  },
  thumbnailImages: {
    width: '17.25rem',
    height: '9.6875rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexDirection: 'row',
  },
  videoTime: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.625rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  videoTime2: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '0.625rem',
    backgroundColor: theme.colors.black,
    flexDirection: 'row',
    paddingVertical: '0.1875rem',
    paddingHorizontal: '0.25rem',
  },
});
