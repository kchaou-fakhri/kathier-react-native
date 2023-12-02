import {Sowra} from '@modules/sowra';
import {SowraMapper} from '@services/mapper/sowraMapper';
import {constantData} from '@assets/data/constantData';

export const getSowraInfo = async (): Promise<Sowra[]> => {
  return await SowraMapper(constantData);
};
