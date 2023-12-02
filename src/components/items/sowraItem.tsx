import {GlobalStyles} from '@comman/index';
import {Sowra} from '@modules/sowra';
import {COLORS} from '@utils/colors';
import {getDeviceDimensions} from '@utils/deviceInfo';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  item: Sowra;
  onItemPressed?: () => void;
}
export const SowraItem: React.FC<Props> = ({item, onItemPressed}) => {
  return (
    <TouchableOpacity
      onPress={onItemPressed}
      style={[GlobalStyles.container, styles.itemContainer]}>
      <View style={styles.cardContainer}>
        <View style={styles.typeContainer}>
          <Text style={styles.textType}>{item.type}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.text, GlobalStyles.H2]}>{item.name}</Text>
          <Text style={[styles.nbEyaText]}>{item.nbAya}</Text>
        </View>

        <View style={styles.containerNumber}>
          <Text style={styles.textID}>{item.id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLORS.textColor,
  },
  textContainer: {
    marginTop: -10,
    marginRight: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    right: 0,
    flex: 1,
  },
  nbEyaText: {
    fontFamily: 'Amiri-Bold',
    width: 70,
    fontSize: 13,
    position: 'absolute',
    bottom: 0,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardContainer: {
    backgroundColor: COLORS.green_100,
    borderRadius: 5,
    height: 60,
    flex: 1,
    width: getDeviceDimensions().width - 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerNumber: {
    width: 25,
    height: 45,
    backgroundColor: COLORS.primary,
    borderBottomEndRadius: 7,
    borderBottomStartRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textID: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  typeContainer: {
    backgroundColor: COLORS.second,
    width: 80,
    height: 30,
    left: 15,
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
  },
  textType: {
    fontFamily: 'Amiri-Bold',
    color: COLORS.textColor,
    marginTop: -5,
  },
});
