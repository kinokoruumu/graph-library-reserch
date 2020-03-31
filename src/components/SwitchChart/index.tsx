import React from "react";
import * as Styled from "./styled";
import { StackedBar } from "../StackedBar";
import { MultipleLine } from "../MultipleLine";
import * as Highcharts from "highcharts";
import { RadioButton } from "../RadioButton";
import { CustomChart } from "../CustomChart";
import { ChartData } from "../../types";

// Highchartsのグローバルオプション設定
Highcharts.setOptions({
  lang: {
    resetZoom: "リセット",
  },
});

function priceYAxisFormatter(value: number) {
  return `${value / 10000}万円`;
}

type ChartType = Highcharts.SeriesOptionsType["type"];

type Props = {
  data: ChartData[];
};
const SwitchChart: React.FunctionComponent<Props> = ({ data }) => {
  const [type, setType] = React.useState<ChartType>("column");
  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ChartType;
    setType(value);
  };
  return (
    <Styled.Container>
      <RadioButton
        defaultChecked={true}
        name="type"
        value="column"
        onChange={onHandleChange}
      >
        Column
      </RadioButton>
      <RadioButton name="type" value="line" onChange={onHandleChange}>
        Line
      </RadioButton>
      <RadioButton name="type" value="bar" onChange={onHandleChange}>
        Bar
      </RadioButton>
      <RadioButton name="type" value="area" onChange={onHandleChange}>
        Area
      </RadioButton>
      <RadioButton name="type" value="areaspline" onChange={onHandleChange}>
        Areaspline
      </RadioButton>
      <RadioButton name="type" value="spline" onChange={onHandleChange}>
        Spline
      </RadioButton>
      <RadioButton name="type" value="scatter" onChange={onHandleChange}>
        Scatter
      </RadioButton>
      <RadioButton name="type" value="pie" onChange={onHandleChange}>
        Pie
      </RadioButton>

      {type === "bar" && (
        <StackedBar
          data={data}
          unitType="price"
          yAxisFormatter={priceYAxisFormatter}
        />
      )}
      {type === "line" && (
        <MultipleLine
          unitType="price"
          data={data}
          yAxisFormatter={priceYAxisFormatter}
        />
      )}
      {type !== "bar" && type !== "line" && (
        <CustomChart type={type} data={data} />
      )}
    </Styled.Container>
  );
};

export { SwitchChart };
