type ConfigType = 'string' | 'choice' | 'number' | 'bool';

interface ConfigField {
  type: ConfigType;
  label: string;
}

interface ProductConfig {
  name: ConfigField;
  size: ConfigField;
  price: ConfigField;
  available: ConfigField;
}

export const ProductConfig: ProductConfig = {
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
