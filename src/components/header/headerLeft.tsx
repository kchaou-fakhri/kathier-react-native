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
export const HeaderLeft = (props: Props) => {
  return (
    <View style={[GlobalStyles.container, styles.conatiner]}>
      <Pressable onPress={props.onSearchClicked}>
        <Image source={IMAGES.IC_SEARCH} style={GlobalStyles.icons} />
      </Pressable>

      <BookMark
        width={24}
        height={24}
        onPress={props.onBookMarkClicked}
        color={props.isMarked ? COLORS.primary : 'red'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
  },
});
