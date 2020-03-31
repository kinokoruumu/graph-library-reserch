import React from "react";
import { Bar } from "react-chartjs-2";

const barData = {
  datasets: [
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "round",
      borderDash: [],
      borderJoinStyle: "square",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#eee",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      data: [
        {
          t: new Date("2015-3-15"),
          y: 12,
        },
        {
          t: new Date("2015-3-16"),
          y: 12,
        },
        {
          t: new Date("2015-3-17"),
          y: 12,
        },
        {
          t: new Date("2015-3-18"),
          y: 21,
        },
        {
          t: new Date("2015-3-19"),
          y: 21,
        },
        {
          t: new Date("2015-3-20"),
          y: 21,
        },
        {
          t: new Date("2015-3-21"),
          y: 21,
        },
        {
          t: new Date("2015-3-22"),
          y: 21,
        },
        {
          t: new Date("2015-3-23"),
          y: 21,
        },
        {
          t: new Date("2015-3-24"),
          y: 21,
        },
      ],
    },
    {
      label: "My First dataset",
      fill: true,
      data: [
        {
          t: new Date("2015-3-15"),
          y: 12,
        },
        {
          t: new Date("2015-3-16"),
          y: 12,
        },
        {
          t: new Date("2015-3-17"),
          y: 12,
        },
        {
          t: new Date("2015-3-18"),
          y: 21,
        },
        {
          t: new Date("2015-3-19"),
          y: 21,
        },
        {
          t: new Date("2015-3-20"),
          y: 21,
        },
        {
          t: new Date("2015-3-21"),
          y: 21,
        },
        {
          t: new Date("2015-3-22"),
          y: 21,
        },
        {
          t: new Date("2015-3-23"),
          y: 21,
        },
        {
          t: new Date("2015-3-24"),
          y: 21,
        },
      ],
    },
  ],
};

const BarExample = () => {
  return (
    <Bar
      data={barData}
      options={{
        scales: {
          xAxes: [
            {
              type: "time",
              distribution: "linear",
              stacked: true,
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      }}
    />
  );
};

export default BarExample;
