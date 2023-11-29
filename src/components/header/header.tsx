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

/**
 * Header is a component representing the application header.
 *
 * @component
 * @param {Props} props - The props of the Header component.
 * @param {string} props.title - The title to be displayed in the header.
 * @param {JSX.Element} [props.children] - Additional elements to be displayed in the left section of the header.
 * @returns {JSX.Element} The Header component.
 */
const Header = ({title, children}: Props) => {
  return (
    /**
     * Main container for the header.
     */
    <View style={styles.container}>
      {/* Left section of the header */}
      <View style={styles.leftHeader}>{children}</View>

      {/* Right section of the header */}
      <View style={styles.rightHeader}>
        {/* Title of the header */}
        <Text style={[GlobalStyles.H2, styles.title]}>{title}</Text>

        {/* Logo image */}
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </View>
    </View>
  );
};

/**
 * Assign the HeaderLeft component to Header for use as a static property.
 * @static
 * @type {React.ComponentType}
 */
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
