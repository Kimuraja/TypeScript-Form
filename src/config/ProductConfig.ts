type ConfigType = 'string' | 'choice' | 'number' | 'bool';

interface ConfigField {
  type: ConfigType;
  label: string;
}

export interface ProductTypeConfig {
  name: ConfigField;
  size: ConfigField;
  price: ConfigField;
  available: ConfigField;
}

export const ProductConfig: ProductTypeConfig = {
  name: {
    type: 'string',
    label: 'Name',
  },
  size: {
    type: 'choice',
    label: 'Size',
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
