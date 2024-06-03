type ConfigType = 'string' | 'choice' | 'number' | 'bool';

interface ConfigField {
  type: ConfigType;
  label: string;
}

interface CategoryConfig {
  name: ConfigField;
  order: ConfigField;
}

export const CategoryConfig: CategoryConfig = {
  name: {
    type: 'string',
    label: 'Name',
  },
  order: {
    type: 'number',
    label: 'Order',
  },
};
