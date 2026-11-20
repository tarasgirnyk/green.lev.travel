/**
 * House type card for «Лінійка будинків»: arch render, type, name, specs, interior themes, price on request.
 * @startingPoint section="Website" subtitle="House type card with interior themes" viewport="700x620"
 */
export interface HouseCardProps {
  name: string;
  /** eyebrow, e.g. «Одноповерхова студія» */
  kind?: string;
  specs?: string[];
  themes?: string[];
  image?: string;
  imagePosition?: string;
  featured?: boolean;
  onRequest?: () => void;
}
export declare function HouseCard(props: HouseCardProps): JSX.Element;
