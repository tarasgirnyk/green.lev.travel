/**
 * lev.plus logo. variant 'full' renders the official supplied logo file (assets/brand/lev-plus-primary.svg; -light.svg for linen/night/mono-light tones).
 * 'lockup' = proposed mark + typeset wordmark; 'mark' / 'wordmark' = proposed parts.
 * mark: 'seal' (lion head + ochre plus badge — primary), 'cross' (lion inside a plus), 'arch' (l+ monogram in arch).
 */
export interface LogoProps {
  variant?: 'full' | 'lockup' | 'mark' | 'wordmark';
  mark?: 'seal' | 'cross' | 'arch';
  /** forest = on linen; linen = on forest; night = Palette B; mono-dark / mono-light = single colour */
  tone?: 'forest' | 'linen' | 'night' | 'mono-dark' | 'mono-light';
  /** height in px (full: logo height; mark: mark height) */
  size?: number;
  /** colour of the gap ring around the seal's plus badge — set to the background behind the logo */
  ring?: string;
}
export declare function Logo(props: LogoProps): JSX.Element;
export interface LogoMarkProps { mark?: LogoProps['mark']; tone?: LogoProps['tone']; size?: number; ring?: string; }
export declare function LogoMark(props: LogoMarkProps): JSX.Element;
export interface WordmarkProps { tone?: LogoProps['tone']; size?: number; }
export declare function Wordmark(props: WordmarkProps): JSX.Element;
