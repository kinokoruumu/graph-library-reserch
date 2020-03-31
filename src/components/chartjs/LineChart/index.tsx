import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "square",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#eee",
      pointBorderWidth: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48],
    },
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.1,
      borderCapStyle: "round",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "square",
      pointBorderWidth: 5,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 10, 21, 31, 34, 40, 48],
    },
  ],
};

const LineExample = () => {
  return <Line data={data} />;
};

export default LineExample;
