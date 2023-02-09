import React from "react";
import { Typography, Box, FormControl, Select, MenuItem } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { ChartWrapper } from "./style";
Chart.register(ArcElement);

const data = {
  labels: ["Male", "Female", "Unknown"],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      borderWidth: 3,
    },
  ],
};
export default function DonutChart() {
  return (
    <ChartWrapper>
      <Box className="chart-parent">
        <Typography varient="p">Ad Insights</Typography>
      </Box>
      <Doughnut data={data} />
    </ChartWrapper>
  );
}
