import React from "react";
import * as Styled from "./styled";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import dayjs from "dayjs";
import { CustomTooltip } from "../../html/tooltip";
import { ChartColors } from "../../constants/chartColors";
import { ChartUnitType, ChartData } from "../../types";

function getOptions(
  series: Highcharts.SeriesOptionsType[],
  unitType: ChartUnitType,
  yAxisFormatter?: (value: number) => string,
) {
  const options: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    chart: {
      type: "column",
      zoomType: "x",
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
      align: "left",
      backgroundColor: "#F5F7F8",
      padding: 10,
      symbolRadius: 0,
      width: "100%",
    },
    tooltip: {
      useHTML: true,
      formatter: CustomTooltip(unitType),
      shared: false, // shared: trueにすると今のformatterは使えない
      backgroundColor: "",
      borderWidth: 0,
      padding: 0,
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: false,
        },
        borderWidth: 0,
      },
    },
    series,
    // series: [
    //   {
    //     type: "area"
    //   }
    // ],
  };

  return options;
}

type Props = {
  data: ChartData[];
  unitType?: ChartUnitType;
  yAxisFormatter?: (value: number) => string;
};
class StackedBar extends React.PureComponent<Props> {
  public render() {
    const { data, unitType = "normal", yAxisFormatter } = this.props;
    const series: Highcharts.SeriesOptionsType[] = data.map((d, i) => ({
      ...d,
      type: "column",
      ...(ChartColors.length <= i && {
        color: ChartColors[ChartColors.length - 1],
      }),
    }));
    return (
      <Styled.Container>
        <HighchartsReact
          highcharts={Highcharts}
          options={getOptions(series, unitType, yAxisFormatter)}
        />
      </Styled.Container>
    );
  }
}

export { StackedBar };
