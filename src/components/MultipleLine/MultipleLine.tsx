import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { CustomTooltip } from "../../html/tooltip";
import { ChartColors } from "../../constants/chartColors";
import dayjs from "dayjs";
import { ChartUnitType, ChartData } from "../../types";

const getOptions = (
  series: Highcharts.SeriesOptionsType[],
  unitType: ChartUnitType,
  yAxisFormatter?: (value: number) => string,
): Highcharts.Options => ({
  chart: {
    zoomType: "xy",
  },
  title: {
    text: "",
  },
  colors: ChartColors,
  xAxis: {
    type: "datetime",
    labels: {
      formatter: function() {
        return dayjs(this.value).format("M/D");
      },
    },
  },
  yAxis: [
    {
      labels: {
        formatter: function() {
          if (this.value === 0) {
            return "0";
          }
          if (yAxisFormatter) {
            return yAxisFormatter(this.value);
          }
          return this.value.toString();
        },
      },
      title: {
        text: "",
      },
    },
  ],
  legend: {
    layout: "horizontal",
    align: "left",
    backgroundColor: "#F5F7F8",
    padding: 10,
    width: "100%",
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 2010,
    },
  },
  tooltip: {
    useHTML: true,
    formatter: CustomTooltip(unitType),
    shared: false, // shared: trueにすると今のformatterは使えない
    backgroundColor: "",
    borderWidth: 0,
    padding: 0,
  },
  series,
  credits: {
    enabled: false,
  },
});

type Props = {
  data: ChartData[];
  unitType?: ChartUnitType;
  yAxisFormatter?: (value: number) => string;
};
class MultipleLine extends React.PureComponent<Props> {
  public render() {
    const { data, unitType = "normal", yAxisFormatter } = this.props;
    const series: Highcharts.SeriesOptionsType[] = data.map((d, i) => ({
      ...d,
      type: "line",
      ...(ChartColors.length <= i && {
        color: ChartColors[ChartColors.length - 1],
      }),
    }));
    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={getOptions(series, unitType, yAxisFormatter)}
      />
    );
  }
}

export { MultipleLine };
