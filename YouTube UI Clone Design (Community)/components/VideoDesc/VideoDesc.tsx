import {StyleSheet, View, Text} from 'react-native';
import {UserAvatar} from '../../components/UserAvatar';
import theme from '../../theme';

export function VideoDesc() {
  return (
    <View style={styles.root}>
      <View style={styles.border}/>
      <View style={styles.videoDesc}>
        <View style={styles.videoDesc2}>
          <View style={styles.channelTitle}>
            <View style={styles.frame11}>
              <View style={styles.channelSubscribesBtn}>
                <View style={styles.channelSubscribesBtn2}>
                  <Text style={styles.subscribes}>
                    Subscribes
                  </Text>
                </View>
              </View>
              <View style={styles.channelProfilePic}>
                <UserAvatar/>
              </View>
              <View style={styles.chanelProfileName}>
                <Text style={styles.marcusLevin}>
                  Marcus Levin
                </Text>
                <Text style={styles.subscribers}>
                  1.2M subscribers
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.videoDesc3}>
            <Text style={styles.chrisFisherAlsoKnownAsTheBlindWoodturnerLearnedHisCraftByListeningToHundredsOfHoursOfYouTubeVideosAndExperimentingInHisWorkshopNowHesAYouTubeCreatorHimselfSellsHisProductsWorldwideAndDoesDemonstrationsAllAroundTheCountry}>
              Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.
            </Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.showMore}>
              show more
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
    height: '10.375rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  border: {
    width: '40rem',
    height: '0.0625rem',
    flexShrink: 0,
    backgroundColor: theme.colors.border.color,
  },
  subscribes: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textTransform: 'uppercase',
  },
  videoDesc: {
    paddingBottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
  },
  videoDesc2: {
    width: '40rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  channelTitle: {
    paddingTop: 16,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
  },
  frame11: {
    width: '40rem',
    height: '3.1875rem',
  },
  channelSubscribesBtn: {
    width: '7.75rem',
    paddingTop: '0.4375rem',
    paddingBottom: '0.5rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    paddingHorizontal: '0.25rem',
  },
  channelSubscribesBtn2: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    backgroundColor: '#C00',
    flexDirection: 'row',
    paddingVertical: '0.625rem',
    paddingHorizontal: '1rem',
    borderRadius: '0.125rem',
  },
  channelProfilePic: {
    display: 'inline-flex',
    paddingTop: '0rem',
    paddingRight: '1rem',
    paddingBottom: '0.1875rem',
    paddingLeft: '0rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  marcusLevin: {
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  subscribers: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  chanelProfileName: {
    display: 'inline-flex',
    paddingTop: '0.6875rem',
    paddingBottom: '0.625rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: '0rem',
  },
  chrisFisherAlsoKnownAsTheBlindWoodturnerLearnedHisCraftByListeningToHundredsOfHoursOfYouTubeVideosAndExperimentingInHisWorkshopNowHesAYouTubeCreatorHimselfSellsHisProductsWorldwideAndDoesDemonstrationsAllAroundTheCountry: {
    width: '36rem',
    color: theme.colors.white.color,
    fontFamily: 'Roboto',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  videoDesc3: {
    paddingTop: '0.75rem',
    paddingRight: '0rem',
    paddingBottom: '0rem',
    paddingLeft: '4rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
  showMore: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    textTransform: 'uppercase',
  },
  btn: {
    paddingTop: '0.5rem',
    paddingRight: '0rem',
    paddingBottom: '0rem',
    paddingLeft: '4rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexDirection: 'row',
  },
});
