import {GlobalStyles} from '@comman/index';
import {Sowra} from '@modules/sowra';
import {COLORS} from '@utils/colors';
import {getDeviceDimensions} from '@utils/deviceInfo';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  item: Sowra;
}
export const SowraItem: React.FC<Props> = ({item}) => {
  return (
    <View style={[GlobalStyles.container, styles.itemContainer]}>
      <View style={styles.cardContainer}>
        <Text style={[styles.text, GlobalStyles.H2]}>{item.name}</Text>

        <View style={styles.containerNumber}>
          <Text style={styles.textID}>{item.id}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {marginTop: -10, marginRight: 10},
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardContainer: {
    backgroundColor: COLORS.green_100,
    borderRadius: 5,
    height: 50,
    flex: 1,
    width: getDeviceDimensions().width - 40,

    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  containerNumber: {
    width: 30,
    height: 40,
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textID: {
    color: COLORS.white,
    fontSize: 15,
  },
});
