import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StockChart from "./components/StockChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <div className="App">
      <StockChart />
      <LineChart />
    </div>
  );
}

export default App;
