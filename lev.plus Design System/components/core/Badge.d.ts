/** Status pill — plot status in the cabinet (free / reserved / sold) or a neutral tag (interior theme, house type). */
export interface BadgeProps {
  status?: 'free' | 'reserved' | 'sold' | 'neutral' | 'accent';
  /** overrides the default status label */
  children?: React.ReactNode;
  solid?: boolean;
}
export declare function Badge(props: BadgeProps): JSX.Element;
