import {IMAGES} from '@assets/index';
import {COLORS} from '@utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {RootStackParamList} from '@configNavigation/navigationParams';
import {ProgressBar} from '@components/progressBar';

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const SplashScreen = (props: Props): JSX.Element => {
  const width = useSharedValue(180);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(1, {duration: 2500});

    width.value = withTiming(
      200,
      {
        duration: 2500,
      },
      finished => {
        if (finished) {
          // Animation is finished, trigger navigation
          runOnJS(handleNavigation)();
        }
      },
    );
  }, []);

  const handleNavigation = () => {
    //props.navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={IMAGES.LOGO}
        style={[styles.logo, {width: width}]}
      />
      <View style={styles.footer}>
        <ProgressBar />
      </View>
    </View>
  );
};

export {SplashScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    resizeMode: 'contain',
  },
  footer: {
    marginBottom: 50,
  },
});
