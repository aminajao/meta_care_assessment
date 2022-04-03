import React from "react";
import { Chart } from "react-charts";

export const LineChart = ({ defaultColors, title, graph }) => {
  const data = [
    {
      label: title,
      data: graph,
    },
  ];

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (value) => value.month,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (value) => value.sales,
        elementType: "line",
      },
    ],
    []
  );

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
        defaultColors,
      }}
    />
  );
};
