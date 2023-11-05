import {StyleSheet, View, Image} from 'react-native';
import userAvatar from '../../assets/images/userAvatar.png';
import theme from '../../theme';

export function UserAvatar() {
  return (
    <View style={styles.root}>
      <Image source={{uri: userAvatar}} style={{width: 24, height: 24}} contentFit="cover"/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '1.5rem',
    height: '1.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: '1.5rem',
  },
  userAvatar: {
    width: '1.5rem',
    height: '1.5rem',
    flexShrink: 0,
  },
});
