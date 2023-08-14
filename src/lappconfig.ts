export interface WaifuConfig {
  waifuPath?: string;
  models?: string[];
  corejs?: string;
  size?: { width: number; height: number } | 'full';
  renderRatio?: number;
  useCache?: boolean;
  debug?: boolean;
}
