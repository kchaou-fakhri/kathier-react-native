import {IMAGES} from '@assets/index';
import {GlobalStyles} from '@comman/index';
import {COLORS} from '@utils/colors';
import {getDeviceDimensions} from '@utils/deviceInfo';
import {Image, StyleSheet, Text, View} from 'react-native';
import {HeaderLeft} from '@components/header/headerLeft';

interface Props {
  title: string;
  children?: JSX.Element;
}

const Header = ({title, children}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftHeader}>{children}</View>
      <View style={styles.rightHeader}>
        <Text style={[GlobalStyles.H2, styles.title]}>{title}</Text>
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </View>
    </View>
  );
};

Header.leftComponent = HeaderLeft;

export {Header};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: getDeviceDimensions().width,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    height: 60,
  },
  title: {
    color: COLORS.primary,
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
    margin: 10,
    resizeMode: 'contain',
  },
  leftHeader: {
    flex: 1,
    marginTop: 18,
    marginLeft: 10,
  },

  rightHeader: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
