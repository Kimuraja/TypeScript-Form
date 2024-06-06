import ConfigArray from './Interfaces';


export const ProductConfig: ConfigArray[] = [
  {
    type: 'string',
    label: 'name',
  },
  {
    type: 'choice',
    label: 'size',
    options: ['small', 'medium', 'large'],
  },
  {
    type: 'number',
    label: 'price',
  },
  {
    type: 'bool',
    label: 'available',
  },
];

export const CategoryConfig: ConfigArray[] = [
  {
    type: 'string',
    label: 'name',
  },
  {
    type: 'number',
    label: 'order',
  },
];
