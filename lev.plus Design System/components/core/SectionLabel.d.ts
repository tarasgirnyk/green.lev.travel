/** Uppercase eyebrow above section headings: «01 — Як це працює». */
export interface SectionLabelProps {
  index?: string;
  children?: React.ReactNode;
  /** light = on forest / night backgrounds */
  tone?: 'default' | 'light';
}
export declare function SectionLabel(props: SectionLabelProps): JSX.Element;
