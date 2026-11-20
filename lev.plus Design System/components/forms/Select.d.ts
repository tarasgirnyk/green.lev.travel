/** Native select styled like Input — budget range in the lead form. */
export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  tone?: 'light' | 'dark';
  name?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
