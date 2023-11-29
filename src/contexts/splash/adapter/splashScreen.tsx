import {IMAGES} from '@assets/index';
import {COLORS} from '@utils/colors';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  runOnJS,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {RootStackParamList} from '@configNavigation/navigationParams';
import {ProgressBar} from '@components/progress/progressBar';
import {store} from '@reduxConfig/store';
import {progressStart} from '../../../comman/progress/useCases/actions';
import {Progress} from '@modules/progress';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {STRINGS} from '@mainAssets/strings/strings';
import {ROUTES} from '@configNavigation/routes';
import {GlobalStyles} from '@comman/index';
interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const DELAY = 1500;

const SplashScreen = (props: Props): JSX.Element => {
  const marginTop = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [isCompleted, setIsCompleted] = useState(true);

  const _progress: Progress = {
    width: 200,
    height: 8,
  };
  useEffect(() => {
    store.dispatch(progressStart(_progress));

    marginTop.value = withDelay(
      DELAY,
      withTiming(
        getDeviceDimensions().height / 1.22,
        {
          duration: 2500,
        },
        finished => {
          if (finished) {
            // Animation is finished, trigger navigation
            runOnJS(movePogress)();
          }
        },
      ),
    );
    opacity.value = withDelay(
      DELAY * 1.6,
      withTiming(1, {duration: 2000}, finished => {
        if (finished) {
          // Animation is finished, trigger navigation
          runOnJS(handleNavigation)();
        }
      }),
    );
  }, []);
  const movePogress = () => {
    setIsCompleted(true);
  };

  const handleNavigation = () => {
    props.navigation.navigate(ROUTES.HOME_SCREEN);
  };

  return (
    <View style={[GlobalStyles.container, styles.container]}>
      {isCompleted ? (
        <Animated.Image
          source={IMAGES.LOGO}
          style={[styles.logo, {opacity: opacity}]}
        />
      ) : null}
      <Animated.View style={[styles.footer, {marginTop: marginTop}]}>
        <ProgressBar />
      </Animated.View>
      <View style={styles.textContainer}>
        <Animated.Text
          style={[{opacity: opacity}, styles.text, GlobalStyles.H3]}>
          {STRINGS.copyright}
        </Animated.Text>
      </View>
    </View>
  );
};

export {SplashScreen};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    position: 'absolute',
    resizeMode: 'contain',
  },
  footer: {},
  textContainer: {
    position: 'absolute',
    bottom: 10,
  },
  text: {
    textAlign: 'center',
  },
});
