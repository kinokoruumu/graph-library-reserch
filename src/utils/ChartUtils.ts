import dayjs from "dayjs";

export type ChartData = {
  name: string;
  data: Array<number | [number | string, number | null] | null>;
  color?: string;
};

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function getSampleData() {
  const demands = [
    { name: "Adx", min: 40000, max: 30000 },
    { name: "fluct", min: 18000, max: 15000 },
    { name: "Logly", min: 15000, max: 13000 },
    { name: "Zucks", min: 13000, max: 10000 },
    { name: "IPM", min: 10000, max: 7000 },
    { name: "prebid", min: 7000, max: 4000 },
    { name: "EB", min: 4000, max: 1000 },
  ];

  const series: ChartData[] = demands.map((demand) => ({
    name: demand.name,
    data: Array(31)
      .fill("")
      .map((_, i) => [
        dayjs(`2020-01-${i + 1}`).unix() * 1000,
        Math.round(rand(demand.min, demand.max)),
      ]),
  }));

  return series;
}
