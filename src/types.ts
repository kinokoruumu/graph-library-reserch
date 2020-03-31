export type ChartUnitType = "normal" | "price";

export type ChartData = {
  name: string;
  data: Array<number | [number | string, number | null] | null>;
  color?: string;
};
