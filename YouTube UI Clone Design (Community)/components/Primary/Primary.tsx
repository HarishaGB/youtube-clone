import {StyleSheet, View, Text} from 'react-native';
import {VideoPlayer} from '../../components/VideoPlayer';
import {VideoDesc} from '../../components/VideoDesc';
import {VideoPageIconsDropdown} from '../../components/VideoPageIconsDropdown';
import {UserAvatar} from '../../components/UserAvatar';
import {Comment} from '../../components/Comment';
import theme from '../../theme';

export function Primary() {
  return (
    <View style={styles.root}>
      <VideoPlayer/>
      <VideoDesc/>
      <View style={styles.comment}>
        <View style={styles.shortBy}>
          <View style={styles.count}>
            <Text style={styles.$286}>
              286
            </Text>
            <Text style={styles.comments}>
               Comments
            </Text>
          </View>
          <View style={styles.shortBy2}>
            <View style={styles.icon}>
              <VideoPageIconsDropdown/>
            </View>
            <Text style={styles.sortBy}>
              Sort by
            </Text>
          </View>
        </View>
        <View style={styles.comment2}>
          <View style={styles.profilePic}>
            <UserAvatar/>
          </View>
          <View style={styles.commentArea}>
            <Text style={styles.addAPublicComment}>
              Add a public comment...
            </Text>
            <View style={styles.border}/>
          </View>
        </View>
      </View>
      <View style={styles.comments2}>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '41.5rem',
    height: '60.5rem',
    paddingTop: '1.5rem',
    paddingRight: '0rem',
    paddingBottom: '0rem',
    paddingLeft: '1.5rem',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#181818',
  },
  $286: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.375rem /* 137.5% */',
  },
  comments: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.375rem /* 137.5% */',
    textTransform: 'capitalize',
  },
  comment: {
    paddingTop: '1.5rem',
    paddingBottom: '2rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.5rem',
    paddingHorizontal: '0rem',
  },
  shortBy: {
    width: '14.125rem',
    height: '1.5rem',
  },
  count: {
    display: 'inline-flex',
    paddingRight: '2rem',
    paddingLeft: '0rem',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '0.0625rem',
  },
  shortBy2: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 0,
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  sortBy: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.5rem /* 171.429% */',
    textTransform: 'uppercase',
  },
  comment2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  profilePic: {
    paddingRight: 0,
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  addAPublicComment: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem /* 142.857% */',
  },
  border: {
    height: '0.0625rem',
    alignSelf: 'stretch',
    backgroundColor: theme.colors.border.color,
  },
  commentArea: {
    width: '36.5rem',
    paddingTop: '0.4375rem',
    paddingBottom: '0.5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.25rem',
    paddingHorizontal: '0rem',
  },
  comments2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
