import {StyleSheet, View} from 'react-native';
import {NavigationsIconsLeftBottom} from '../../components/NavigationsIconsLeftBottom';
import theme from '../../theme';

export function TopMenuIcon() {
  return (
    <View style={styles.root}>
      <NavigationsIconsLeftBottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'inline-flex',
    alignItems: 'flex-start',
    gap: '0.625rem',
    backgroundColor: theme.colors.background.color,
    flexDirection: 'row',
    padding: '1.25rem',
  },
});
