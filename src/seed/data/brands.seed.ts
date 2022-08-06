import { Brand } from '../../brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Renault',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
];