import {StyleSheet, View, Text, Image} from 'react-native';
import image from '../../assets/images/image.png';
import IcoFullscreen from '../../assets/vectors/IcoFullscreen.svg';
import IcoTv from '../../assets/vectors/IcoTv.svg';
import icoTheater from '../../assets/images/icoTheater.png';
import IcoHd from '../../assets/vectors/IcoHd.svg';
import IcoTitles from '../../assets/vectors/IcoTitles.svg';
import IcoSound from '../../assets/vectors/IcoSound.svg';
import IcoNext from '../../assets/vectors/IcoNext.svg';
import IcoPlay from '../../assets/vectors/IcoPlay.svg';
import IcoInfo from '../../assets/vectors/IcoInfo.svg';
import theme from '../../theme';

export function YoutubePlayer() {
  return (
    <View style={styles.root}>
      <Image source={{uri: image}} style={{width: 424, height: 238}} contentFit="cover"/>
      <View style={styles.shadows}>
        <View style={styles.bottom}/>
        <View style={styles.top}/>
      </View>
      <View style={styles.bottomControls}>
        <IcoFullscreen/>
        <IcoTv/>
        <Image source={{uri: icoTheater}} style={{width: 20, height: 14}} contentFit="cover"/>
        <IcoHd/>
        <IcoTitles/>
        <Text style={styles.time}>
          5:07 / 15:28
        </Text>
        <IcoSound/>
        <IcoNext/>
        <IcoPlay/>
        <View style={styles.timeline}>
          <View style={styles.full}/>
          <View style={styles.loaded}/>
          <View style={styles.played}/>
        </View>
      </View>
      <Text style={styles.blindWoodturnerTurningPassionIntoFineArt}>
        Blind Woodturner: Turning passion into fine art
      </Text>
      <IcoInfo/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '26.5rem',
    height: '14.875rem',
  },
  image: {
    width: '26.5rem',
    height: '14.875rem',
    flexShrink: 0,
  },
  bottom: {
    width: '26.5rem',
    height: '6rem',
    flexShrink: 0,
    backgroundBlendMode: 'multiply',
  },
  top: {
    width: '26.5rem',
    height: '6rem',
    flexShrink: 0,
  },
  shadows: {
    width: '26.5rem',
    height: '14.875rem',
    flexShrink: 0,
  },
  icoHd: {
    width: '1.25rem',
    height: '1rem',
    flexShrink: 0,
  },
  time: {
    color: '#EAEAEA',
    fontFamily: 'Roboto',
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '146.484% /* 1.19019rem */',
    letterSpacing: '0.00813rem',
  },
  full: {
    width: '25rem',
    height: '0.1875rem',
    flexShrink: 0,
    backgroundColor: 'rgba(234, 234, 234, 0.20)',
  },
  loaded: {
    width: '13.00156rem',
    height: '0.1875rem',
    flexShrink: 0,
    backgroundColor: 'rgba(234, 234, 234, 0.50)',
  },
  played: {
    width: '8.69531rem',
    height: '0.1875rem',
    flexShrink: 0,
    backgroundColor: '#FC0D1C',
  },
  bottomControls: {
    width: '25.50156rem',
    height: '1.9375rem',
    flexShrink: 0,
  },
  timeline: {
    width: '25.50156rem',
    height: '0.1875rem',
    flexShrink: 0,
  },
  blindWoodturnerTurningPassionIntoFineArt: {
    width: '22.25rem',
    height: '1.6875rem',
    flexDirection: 'column',
    justifyContent: 'center',
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
});
