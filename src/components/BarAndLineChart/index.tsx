import React from "react";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options: Options = {
  credits: {
    enabled: false
  },
  chart: {
    zoomType: "xy"
  },
  colors: ["#9CDDFD", "#0B82F4"],
  title: {
    text: "Average Monthly Temperature and Rainfall in Tokyo"
  },
  xAxis: [
    {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      crosshair: true
    }
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: "{value}°C"
      },
      title: {
        text: "Temperature"
      }
    },
    {
      // Secondary yAxis
      title: {
        text: "Rainfall"
      },
      labels: {
        format: "{value} mm"
      },
      opposite: true
    }
  ],
  tooltip: {
    shared: true
  },
  legend: {
    layout: "horizontal",
    align: "left",
    backgroundColor: "#F5F7F8",
    padding: 10,
    width: "100%",
    symbolRadius: 0
  },
  series: [
    {
      name: "Rainfall",
      type: "column",
      yAxis: 1,
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4
      ],
      tooltip: {
        valueSuffix: " mm"
      }
    },
    {
      name: "Temperature",
      type: "spline",
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.2,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6
      ],
      tooltip: {
        valueSuffix: "°C"
      }
    }
  ]
};

const BarAndLineChart = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default BarAndLineChart;
