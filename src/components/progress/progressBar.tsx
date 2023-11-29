import {
  progressLoadingState,
  progressState,
} from '@contexts/splash/useCases/selectors';
import {COLORS} from '@utils/colors';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
export const ProgressBar = () => {
  const progress = useSharedValue(0);

  let prog = useSelector(progressState);
  useEffect(() => {
    progress.value = withTiming(200, {duration: 2000});
  });

  return (
    <View
      style={[
        {
          height: prog?.height,
          backgroundColor: COLORS.primary,

          width: prog?.width,
        },
        styles.container,
      ]}>
      <Animated.View
        style={{
          marginLeft: progress,
          height: prog?.height,
          backgroundColor: COLORS.white,
        }}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
});
