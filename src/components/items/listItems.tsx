import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {Sowra} from '@modules/sowra';
import {SowraItem} from './sowraItem';
import {GlobalStyles} from '@comman/index';

interface Props {
  items: Sowra[];
}
export const ListItems: React.FC<Props> = ({items}) => {
  return (
    <View style={[GlobalStyles.container, styles.listContainer]}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <SowraItem onItemPressed={() => {}} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
});
