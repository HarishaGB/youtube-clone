import {StyleSheet, View, Text} from 'react-native';
import {Search} from '../../components/Search';
import {Mic} from '../../components/Mic';
import theme from '../../theme';

export function NavigationsSearchBox() {
  return (
    <View style={styles.root}>
      <View style={styles.navigationsSearchBoxArea}>
        <View style={styles.navigationsSearchBox}>
          <View style={styles.borderBottom}/>
          <View style={styles.borderLeft}/>
          <View style={styles.borderTop}/>
          <View style={styles.navigationsSearchBoxPlaceholder}>
            <Text style={styles.search}>
              Search
            </Text>
          </View>
        </View>
        <View style={styles.navigationsSearchBoxButton}>
          <View style={styles.navigationsSearchBoxButtonIcon}>
            <Search/>
          </View>
        </View>
      </View>
      <View style={styles.navigationsIcon}>
        <Mic/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '29.375rem',
    height: '2.5rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '0.25rem',
    flexDirection: 'row',
  },
  borderBottom: {
    width: '22.625rem',
    height: '0.0625rem',
    flexShrink: 0,
    backgroundColor: theme.colors.border.color,
  },
  borderLeft: {
    width: '0.0625rem',
    height: '2.5rem',
    flexShrink: 0,
    backgroundColor: theme.colors.border.color,
  },
  borderTop: {
    width: '22.625rem',
    height: '0.0625rem',
    flexShrink: 0,
    backgroundColor: theme.colors.border.color,
  },
  search: {
    color: theme.colors.gray.color,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  navigationsSearchBoxArea: {
    width: '26.625rem',
    height: '2.5rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexDirection: 'row',
  },
  navigationsSearchBox: {
    width: '22.625rem',
    height: '2.5rem',
    flexShrink: 0,
    borderTopLeftRadius: '0.125rem',
    borderTopRightRadius: '0rem',
    borderBottomRightRadius: '0rem',
    borderBottomLeftRadius: '0.125rem',
    backgroundColor: '#121212',
  },
  navigationsSearchBoxPlaceholder: {
    width: '3.375rem',
    height: '1.9375rem',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexShrink: 0,
    flexDirection: 'row',
    paddingVertical: '0.375rem',
    paddingHorizontal: '0.125rem',
  },
  navigationsSearchBoxButton: {
    width: '4rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.625rem',
    flexShrink: 0,
    borderTopLeftRadius: '0rem',
    borderTopRightRadius: '0.125rem',
    borderBottomRightRadius: '0.125rem',
    borderBottomLeftRadius: '0rem',
    borderWidth: 1,
    borderColor: theme.colors.border.color,
    borderStyle: 'solid',
    backgroundColor: theme.colors.border.color,
    paddingVertical: '0.125rem',
    paddingHorizontal: '0.4375rem',
  },
  navigationsSearchBoxButtonIcon: {
    width: '3.125rem',
    height: '2.25rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
    flexDirection: 'row',
    paddingVertical: '0.375rem',
    paddingHorizontal: '0.8125rem',
  },
  navigationsIcon: {
    alignItems: 'flex-start',
    gap: '0.625rem',
    backgroundColor: '#000',
    flexDirection: 'row',
    padding: '0.5rem',
    borderRadius: '2.5rem',
  },
});
