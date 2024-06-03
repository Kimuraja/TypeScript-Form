export const ProductConfig = {
  name: {
    type: 'string',
    label: 'Name',
  },
  size: {
    type: 'choice',
    label: 'Size'
  },
  price: {
    type: 'number',
    label: 'Price',
  },
  available: {
    type: 'bool',
    label: 'Available',
  },
};
