type ConfigType = 'string' | 'choice' | 'number' | 'bool';

export default interface ConfigArray {
  type: ConfigType;
  label: string;
  options?: string[];
}