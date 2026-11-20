/**
 * Primary action control. Quiet confidence: one primary per view, forest fill on linen, gold fill in night theme.
 * @startingPoint section="Core" subtitle="Buttons — primary, accent, outline, inverse, ghost" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = forest (gold in night); accent = ochre with graphite text; outline = on light; inverse = on forest/photo; ghost = text link */
  variant?: 'primary' | 'accent' | 'outline' | 'inverse' | 'ghost';
  size?: 'md' | 'sm';
  /** trailing icon name, usually 'arrow' */
  icon?: string;
  iconLeft?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
