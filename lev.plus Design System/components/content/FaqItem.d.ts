/** Accordion row for FAQ — hairline divider, ringed plus/minus toggle. */
export interface FaqItemProps { question: string; answer: string; open?: boolean; onToggle?: () => void; }
export declare function FaqItem(props: FaqItemProps): JSX.Element;
