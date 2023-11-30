import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BookMark, IMAGES} from '@assets/index';
import {GlobalStyles} from '@comman/index';
import {COLORS} from '@utils/colors';

interface Props {
  isSearch?: boolean;
  isMarked?: boolean;
  onSearchClicked?: () => void;
  onBookMarkClicked?: () => void;
}

/**
 * HeaderLeft is a component representing the left section of the application header.
 * It includes icons for search and bookmark functionality.
 *
 * @component
 * @param {Props} props - The props of the HeaderLeft component.
 * @param {boolean} [props.isSearch] - Indicates whether the search icon should be displayed.
 * @param {boolean} [props.isMarked] - Indicates whether the bookmark icon should be marked.
 * @param {() => void} [props.onSearchClicked] - Callback function for when the search icon is clicked.
 * @param {() => void} [props.onBookMarkClicked] - Callback function for when the bookmark icon is clicked.
 * @returns {JSX.Element} The HeaderLeft component.
 */
export const HeaderLeft = (props: Props) => {
  return (
    /**
     * Main container for the HeaderLeft component.
     */
    <View style={[GlobalStyles.container, styles.container]}>
      {/* Pressable for the search icon */}
      <Pressable onPress={props.onSearchClicked}>
        {/* Search icon */}
        <Image
          source={IMAGES.IC_SEARCH}
          style={[GlobalStyles.icons, styles.icons]}
        />
      </Pressable>

      {/* Bookmark icon with optional marking based on isMarked prop */}
      <BookMark
        width={24}
        height={24}
        onPress={props.onBookMarkClicked}
        color={props.isMarked ? COLORS.primary : COLORS.second}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icons: {
    marginLeft: 15,
  },
});
