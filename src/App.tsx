import React from "react";
import StackChart from "./components/StackChart";
import LineChart from "./components/LineChart";
import BarAndLineChart from "./components/BarAndLineChart";
import AreaChart from "./components/AreaChart";
import StackedBarChartByDate from "./components/StackedBarChartByDate/index";

function App() {
  return (
    <div className="App">
      <StackedBarChartByDate />
      <BarAndLineChart />
      <LineChart />
      <StackChart />
      <AreaChart />
    </div>
  );
}

export default App;
