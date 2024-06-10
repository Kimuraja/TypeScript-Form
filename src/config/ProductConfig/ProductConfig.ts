import FormConfig from '../FormConfig';


export const ProductConfig: FormConfig[] = [
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