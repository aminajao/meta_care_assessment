import React from "react";
import {
  LineChart as Chart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export const LineChart = ({ defaultColors, title, graph }) => {
  return (
    <Chart width={800} height={220} data={graph}>
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="month" interval="preserveStartEnd" />
      <YAxis interval="preserveStartEnd" />
      <Line
        type="line"
        dataKey="sales"
        stroke={defaultColors}
        activeDot={{ r: 0 }}
      />
    </Chart>
  );
};
