import {useArabicNumber} from '@hooks/useArabicNumber';
import {SowraDto} from '@modules/index';
import {Sowra} from '@modules/sowra';

export const SowraMapper = async (sorwaDto: SowraDto[]): Promise<Sowra[]> => {
  return await Promise.all(
    sorwaDto.map(item => ({
      id: useArabicNumber(item.id),
      nbAya:
        useArabicNumber(item.nbOfAya.toString()) +
        (item.nbOfAya <= 10 ? ' آيات' : ' آية'),

      name: item.name,
      type: item.type,
    })),
  );
};
