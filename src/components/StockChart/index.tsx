import React from "react";
import Highcharts, { Options } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const options: Options = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column"
  },
  title: {
    text: "Stacked column chart"
  },
  colors: ["#03348D", "#0864D1", "#0B82F4", "#6AC3FB", "#9CDDFD", "#CDF0FE"],
  xAxis: {
    categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Total fruit consumption"
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "bold",
        color:
          // theme
          (Highcharts.defaultOptions.title?.style &&
            Highcharts.defaultOptions.title?.style.color) ||
          "gray"
      }
    }
  },
  legend: {
    align: "left",
    backgroundColor: "#F5F7F8",
    padding: 10,
    symbolRadius: 0,
    width: "100%"
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
  },
  plotOptions: {
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: false
      },
      borderWidth: 0
    }
  },
  series: [
    {
      type: "column",
      name: "John",
      data: [5, 3, 4, 7, 2]
    },
    {
      type: "column",
      name: "Jane",
      data: [2, 2, 3, 2, 1]
    },
    {
      type: "column",
      name: "Joe",
      data: [3, 4, 4, 2, 5]
    }
  ]
};

const StockChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default StockChart;
