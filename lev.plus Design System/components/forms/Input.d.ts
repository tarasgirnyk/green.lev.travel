/** Text field with uppercase label — lead form (ім'я, телефон) and cabinet forms. */
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  /** dark = on forest / night surfaces */
  tone?: 'light' | 'dark';
  name?: string;
  value?: string;
  onChange?: (e: any) => void;
  hint?: string;
  error?: string;
}
export declare function Input(props: InputProps): JSX.Element;
