import {progressState} from '@comman/progress/useCases/selectors';
import {COLORS} from '@utils/colors';
import {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

/**
 * ProgressBar is a component representing an animated progress bar.
 * It uses react-native-reanimated for animation and retrieves progress state from the Redux store.
 *
 * @returns {JSX.Element} The ProgressBar component.
 */
export const ProgressBar = () => {
  // Create a shared value to animate the progress bar
  const progress = useSharedValue(0);

  // Get the progress state from the Redux store
  let prog = useSelector(progressState);

  // useEffect hook to update the progress animation when the component mounts
  useEffect(() => {
    // Set the progress value with animation using react-native-reanimated
    progress.value = withTiming(200, {duration: 2000});
  }, []);

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
      {/* Animated View representing the progress */}
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
