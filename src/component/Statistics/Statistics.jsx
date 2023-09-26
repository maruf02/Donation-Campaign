import React from "react";
import { Chart } from "react-google-charts";

const abc = 3;

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 12],
  ["Eat", 3],
];

export const options = {
  title: "My Daily Activities",
};

const Statistics = () => {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default Statistics;
