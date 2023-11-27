import {COLORS} from '@utils/colors';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export {SplashScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
