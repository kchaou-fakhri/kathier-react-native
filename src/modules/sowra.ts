import {Eya} from './eya';

export interface Sowra {
  id?: number | string;
  nbAya?: number | string;
  name?: string;
  type?: string;
  ayets?: Eya[];
}
