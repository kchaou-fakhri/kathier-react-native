import {
  progressLoadingState,
  progressState,
} from '@contexts/splash/useCases/selectors';
import {COLORS} from '@utils/colors';
import {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
export const ProgressBar = () => {
  const progress = useSharedValue(0);

  let prog = useSelector(progressState);
  useEffect(() => {
    progress.value = withTiming(200, {duration: 2000});
  });
  useEffect(() => {
    console.log('🚀 ~ file: progressBar.tsx:11 ~ ProgressBar ~ loading:', prog);
  }, [prog]);

  return (
    <View
      style={{
        height: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        width: prog?.width,
      }}>
      <Animated.View
        style={{
          marginLeft: progress,
          height: 10,
          backgroundColor: COLORS.white,
        }}></Animated.View>
    </View>
  );
};
