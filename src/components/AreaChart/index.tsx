import React from "react";
import Highcharts, { Options } from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const AreaChart = () => {
  const [report, setReport] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json"
      )
      .then(res => {
        setReport(res.data);
      });
  }, []);

  const options: Options = {
    credits: {
      enabled: false
    },
    chart: {
      zoomType: "x"
    },
    title: {
      text: "USD to EUR exchange rate over time"
    },
    xAxis: {
      type: "datetime"
    },
    yAxis: {
      title: {
        text: "Exchange rate"
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, "rgba(11, 130, 244, 0.5)"],
            [1, "rgba(11, 130, 244, 0)"]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: 0.6
      }
    },
    series: [
      {
        type: "area",
        name: "USD to EUR",
        data: report
      }
    ]
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaChart;
