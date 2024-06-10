type ConfigType = 'string' | 'choice' | 'number' | 'bool';

export default interface FormConfig {
  type: ConfigType;
  label: string;
  options?: string[];
}