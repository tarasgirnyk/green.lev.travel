/** Key figure tile: label, big serif number, optional hint («прогноз»). */
export interface MetricTileProps { value: string; label: string; hint?: string; tone?: 'light' | 'dark'; }
export declare function MetricTile(props: MetricTileProps): JSX.Element;
