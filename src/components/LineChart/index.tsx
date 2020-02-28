import React from "react";
import Highcharts, { Options } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options: Options = {
  // データ量の制限
  // ゼロで無制限、数値でその値まで許す
  // turboThreshold: 0,

  chart: {
    zoomType: "x"
  },
  title: {
    text: "Solar Employment Growth by Sector, 2010-2016"
  },
  colors: ["#03348D", "#0864D1", "#0B82F4", "#6AC3FB", "#9CDDFD", "#CDF0FE"],
  yAxis: {
    title: {
      text: "Number of Employees"
    }
  },
  legend: {
    layout: "horizontal",
    align: "left",
    backgroundColor: "#F5F7F8",
    padding: 10,
    width: "100%"
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  series: [
    {
      type: "line", // ?
      name: "Installation",
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    },
    {
      type: "line",
      name: "Manufacturing",
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    },
    {
      type: "line",
      name: "Sales & Distribution",
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    },
    {
      type: "line",
      name: "Project Development",
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    },
    {
      type: "line",
      name: "Other",
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }
  ],
  credits: {
    enabled: false
  }
};

const LineChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default LineChart;
