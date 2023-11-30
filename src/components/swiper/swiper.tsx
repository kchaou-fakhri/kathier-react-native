import {StyleSheet, View} from 'react-native';
import {COLORS} from '@utils/colors';
import {Chip} from '@components/chip/chip';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {useState} from 'react';
import {CONSTANTS} from '@utils/constants';
interface Props {
  items?: string[];
  onPressedSowra?: () => void;
  onSowraPressed?: () => void;
  onEyaPressed?: () => void;
  onQor2enPressed?: () => void;
}

export const Swiper: React.FC<Props> = (props: Props) => {
  const [pressedItem, setPressedItem] = useState(CONSTANTS.SOWRA);

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <Chip
          text={props.items!![0]}
          isLeft={true}
          isPressed={pressedItem === CONSTANTS.QOR2EN ? true : false}
          onChipPressed={() => {
            setPressedItem(CONSTANTS.QOR2EN);
            return props.onQor2enPressed;
          }}
        />
        <Chip
          text={props.items!![1]}
          isPressed={pressedItem === CONSTANTS.EYA ? true : false}
          onChipPressed={() => {
            setPressedItem(CONSTANTS.EYA);
            return props.onEyaPressed;
          }}
        />
        <Chip
          text={props.items!![2]}
          isPressed={pressedItem === CONSTANTS.SOWRA ? true : false}
          onChipPressed={() => {
            setPressedItem(CONSTANTS.SOWRA);
            return props.onSowraPressed;
          }}
          isRight={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: getDeviceDimensions().width / 1.2,
    height: 40,
    backgroundColor: COLORS.second,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  chipContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
