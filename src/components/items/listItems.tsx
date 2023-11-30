import {View, Text} from 'react-native';
import React from 'react';
import {Sowra} from '@modules/sowra';
import {FlashList} from '@shopify/flash-list';
import {SowraItem} from './sowraItem';

interface Props {
  items: Sowra[];
}
export const ListItems: React.FC<Props> = ({items}) => {
  return (
    <View>
      <FlashList
        data={items}
        renderItem={({item}) => <SowraItem item={item} />}
        estimatedItemSize={114}
      />
    </View>
  );
};
