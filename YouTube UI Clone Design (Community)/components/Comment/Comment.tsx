import {StyleSheet, View, Text} from 'react-native';
import {UserAvatar} from '../../components/UserAvatar';
import {Liked} from '../../components/Liked';
import {VideoPageIconsDisLiked} from '../../components/VideoPageIconsDisLiked';
import theme from '../../theme';

export function Comment() {
  return (
    <View style={styles.root}>
      <View style={styles.profilePic}>
        <UserAvatar/>
      </View>
      <View style={styles.comment}>
        <View style={styles.commentHeader}>
          <Text style={styles.jamesGouse}>
            James Gouse 
          </Text>
          <Text style={styles.$8HoursAgo}>
             8 hours ago
          </Text>
        </View>
        <View style={styles.commentText}>
          <Text style={styles.wowWorldIsFullOfDifferentSkills}>
            Wow, world is full of different skills 
          </Text>
        </View>
        <View style={styles.commentToolbar}>
          <View style={styles.button}>
            <View style={styles.like}>
              <Liked/>
            </View>
            <View style={styles.likeText}>
              <Text style={styles.$3}>
                3
              </Text>
            </View>
          </View>
          <View style={styles.button2}>
            <View style={styles.like2}>
              <VideoPageIconsDisLiked/>
            </View>
          </View>
          <View style={styles.reply2}>
            <Text style={styles.reply}>
              reply
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '40rem',
    paddingBottom: 0,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  profilePic: {
    paddingRight: 0,
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  jamesGouse: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.8125rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '1.25rem /* 153.846% */',
  },
  $8HoursAgo: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem /* 166.667% */',
  },
  comment: {
    width: '34rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexShrink: 0,
  },
  commentHeader: {
    paddingBottom: 0,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  wowWorldIsFullOfDifferentSkills: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.25rem /* 142.857% */',
  },
  commentText: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingVertical: '0.125rem',
    paddingHorizontal: '0rem',
  },
  commentToolbar: {
    paddingTop: 4,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  button: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '0.0625rem',
    paddingHorizontal: '0rem',
  },
  like: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.5rem',
  },
  $3: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.125rem /* 150% */',
  },
  likeText: {
    paddingRight: '0.5rem',
    paddingLeft: '0rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingVertical: '0.4375rem',
  },
  button2: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingVertical: '0.0625rem',
    paddingHorizontal: '0rem',
  },
  like2: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    padding: '0.5rem',
  },
  reply: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.125rem /* 150% */',
    textTransform: 'uppercase',
  },
  reply2: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
    paddingVertical: '0.5rem',
    paddingHorizontal: '1rem',
  },
});
