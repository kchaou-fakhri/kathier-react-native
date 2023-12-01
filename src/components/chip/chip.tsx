import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '@utils/colors';
interface Props {
  text: string;
  isPressed?: boolean;
  onChipPressed?: () => void;
  isLeft?: boolean;
  isRight?: boolean;
  isCenter?: boolean;
}

/**
 * Chip is a component representing a clickable chip with customizable styles.
 *
 * @component
 * @param {Props} props - The props of the Chip component.
 * @param {string} props.text - The text content of the chip.
 * @param {boolean} [props.isPressed] - Indicates whether the chip is pressed.
 * @param {() => void} [props.onChipPressed] - Callback function for when the chip is pressed.
 * @param {boolean} [props.isLeft] - Indicates whether the chip is positioned on the left side.
 * @param {boolean} [props.isRight] - Indicates whether the chip is positioned on the right side.
 * @param {boolean} [props.isCenter] - Indicates whether the chip is positioned in the center.
 * @returns {JSX.Element} The Chip component.
 */
export const Chip: React.FC<Props> = ({
  text,
  isPressed,
  onChipPressed,
  isLeft,
  isRight,
  isCenter,
}) => {
  // Determine styles based on the state of the chip
  const chipStyles = isPressed ? isPressedStyles() : isNotPressedStyles();
  const chipPositionStyles = isLeft
    ? isLeftStyles()
    : isRight
    ? isRightStyles()
    : {};

  // Render the chip component
  return (
    /**
     * Main container for the Chip component.
     */
    <View style={[styles.container, chipStyles, chipPositionStyles]}>
      {/* TouchableOpacity for making the chip clickable */}
      <TouchableOpacity onPress={onChipPressed} style={styles.container}>
        {/* Text content of the chip */}
        <Text
          style={[
            styles.text,
            {color: isPressed ? COLORS.white : COLORS.primary},
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
  },
});

// Functions for defining styles based on different states or positions
const isPressedStyles = () => {
  return {
    backgroundColor: COLORS.primary,
  };
};

const isNotPressedStyles = () => {
  return {
    backgroundColor: COLORS.second,
  };
};

const isLeftStyles = () => {
  return {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    marginRight: 1,
  };
};

const isRightStyles = () => {
  return {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 1,
  };
};
