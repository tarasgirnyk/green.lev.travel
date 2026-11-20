/** Line icon, 24px grid, 1.8 stroke, round caps. First 11 glyphs come from the green.lev.travel codebase; the rest are Lucide-style additions. */
export interface IconProps {
  name: 'arrow'|'trend'|'terrain'|'blueprint'|'home'|'cycle'|'briefcase'|'team'|'flag'|'plus'|'minus'|'check'|'shield'|'receipt'|'lock'|'pin'|'key'|'file'|'calendar'|'chevron'|'chevronRight'|'mail'|'phone'|'ruler'|'grid'|'wallet'|'user'|'logout';
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare const ICON_NAMES: string[];
