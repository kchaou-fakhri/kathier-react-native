import {folders} from '@assets/index';
import {unzipFolder} from '@helpers/unzipFolder';
import RNFS from 'react-native-fs';

const targetPath = `${RNFS.DocumentDirectoryPath}/data`;
const destination = folders().data;

export const useUnZipFolder = async () => {
  // Check if the file already exists to avoid unnecessary copying
  console.log('START Unzipping...');
  try {
    RNFS.exists(destination)
      .then(exists => {
        if (!exists) {
          // If the file doesn't exist, copy it from the project's assets
          return RNFS.copyFileAssets(
            targetPath,
            `${RNFS.DocumentDirectoryPath}`,
          );
        }
        return Promise.resolve();
      })
      .then(async () => {
        // Unzip the file
        return await unzipFolder(destination, targetPath);
      })
      .then(result => {
        console.log(`Unzip successful: ${result}`);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  } catch (e) {
    console.log(e);
  }

  console.log('END Unzipping.');
};
