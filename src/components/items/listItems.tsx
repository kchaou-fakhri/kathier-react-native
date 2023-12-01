import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Sowra} from '@modules/sowra';
import {FlashList} from '@shopify/flash-list';
import {SowraItem} from './sowraItem';
import {GlobalStyles} from '@comman/index';

interface Props {
  items: Sowra[];
}
export const ListItems: React.FC<Props> = ({items}) => {
  return (
    <View style={[GlobalStyles.container, styles.listContainer]}>
      <FlashList
        data={items}
        renderItem={({item}) => <SowraItem item={item} />}
        estimatedItemSize={items.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
