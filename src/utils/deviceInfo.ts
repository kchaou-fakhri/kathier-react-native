import {Device} from '@modules/device';
import {Dimensions} from 'react-native';

export const getDeviceDimensions = (): Device => {
  return {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  };
};
