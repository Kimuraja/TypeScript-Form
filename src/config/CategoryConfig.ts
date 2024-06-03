type ConfigType = 'string' | 'choice' | 'number' | 'bool';

interface ConfigField {
  type: ConfigType;
  label: string;
}

export interface CategoryTypeConfig {
  name: ConfigField;
  order: ConfigField;
}

export const CategoryConfig: CategoryTypeConfig = {
  name: {
    type: 'string',
    label: 'Name',
  },
  order: {
    type: 'number',
    label: 'Order',
  },
};
