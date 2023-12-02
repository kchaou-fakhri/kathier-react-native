import {COLORS} from '@utils/colors';
import {StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icons: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 20,
  },

  H3: {fontFamily: 'Amiri-Regular', fontSize: 13},
  H2: {fontFamily: 'Amiri-Bold', fontSize: 18},
});
