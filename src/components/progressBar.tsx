import {COLORS} from '@utils/colors';
import {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

export const ProgressBar = () => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(200, {duration: 2000});
  });

  return (
    <View
      style={{
        height: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        width: 200,
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
