import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const values = props.DataPoint.map((obj)=>obj.value);
    let total = values.reduce((sum, val)=>sum+val);
  return (
    <div className="chart">
      {props.DataPoint.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={total}
            label={dataPoint.label}
            
          />
        );
      })}
    </div>
  );
};
export default Chart;
