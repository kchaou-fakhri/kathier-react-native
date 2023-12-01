import {Sowra} from '@modules/sowra';
import {SowraMapper} from '@services/mapper/sowraMapper';
import {mockedData} from '@assets/data/mockedData';

export const getSowraInfo = async (): Promise<Sowra[]> => {
  return await SowraMapper(mockedData);
};
