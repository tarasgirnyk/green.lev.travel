/** One step of «Як це працює»: serif numeral + ringed icon + title + short text. */
export interface StepItemProps { n: string; icon?: string; title: string; text?: string; tone?: 'light' | 'dark'; active?: boolean; }
export declare function StepItem(props: StepItemProps): JSX.Element;
