export interface FormField {
  type: 'input' | 'select' | 'checkbox' | 'radio'; // extend as needed
  label: string;
  name: string;
  placeholder?: string;
  options?: Array<{ label: string; value: any }>;
  validators?: any[];
  defaultValue?: any;
}