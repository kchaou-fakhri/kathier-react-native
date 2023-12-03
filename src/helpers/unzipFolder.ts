import {charset} from '@constants/constants';
import {unzip} from 'react-native-zip-archive';

/**
 * Handles unzipping a folder from the source file to the specified destination path.
 *
 * @param {string} sourcePath - The name or path of the source zip file to unzip.
 * @param {string} targetPath - The path where the contents of the zip file should be extracted.
 */
export const unzipFolder = async (sourcePath: string, targetPath: string) => {
  try {
    await unzip(sourcePath, targetPath, charset)
      .then(path => {
        console.log(`unzip completed at ${path}`);
      })
      .catch(error => {
        console.error(error);
      });
  } catch (e) {
    console.log(e);
  }
};
