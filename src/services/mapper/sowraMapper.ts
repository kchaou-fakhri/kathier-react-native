import {SowraDto} from '@modules/index';
import {Sowra} from '@modules/sowra';

export const SowraMapper = async (sorwaDto: SowraDto[]): Promise<Sowra[]> => {
  return await Promise.all(
    sorwaDto.map(item => ({
      id: Number.parseInt(item.id),
      nbAya: item.nbOfAya,
      name: item.name,
    })),
  );
};
