import {Sowra} from '@modules/sowra';
import {SowraMapper} from '@services/mapper/sowraMapper';

export const getSowraInfo = async (): Promise<Sowra[]> => {
  return await SowraMapper(mockedData);
};
