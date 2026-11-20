/**
 * Investor-cabinet project card: plot + house + key figures + expertise checks + status. Works in light and night theme.
 * @startingPoint section="Cabinet" subtitle="Project card — plot, house, key figures" viewport="900x420"
 */
export interface ProjectFigure { label: string; value: string; hint?: string; }
export interface ProjectCardProps {
  code?: string;
  name: string;
  location: string;
  status?: 'free' | 'reserved' | 'sold';
  image?: string;
  plot?: { area?: string; note?: string };
  house?: { type?: string; note?: string };
  /** expertise blocks passed, e.g. ['Юридична','Технічна','Ринкова'] */
  checks?: string[];
  /** 3–6 key numbers; mark forecasts with hint «прогноз» */
  figures?: ProjectFigure[];
  layout?: 'horizontal' | 'vertical';
  onOpen?: () => void;
  onReserve?: () => void;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
