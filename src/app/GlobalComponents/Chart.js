import React, { useState } from "react";
import { Typography, Box, FormControl, Select, MenuItem } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { ChartWrapper } from "./style";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

Chart.register(ArcElement);

const dataset = [
  {
    data: [40, 35, 25],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    borderWidth: 3,
  },
  {
    data: [70, 65, 75],
    backgroundColor: ["#FFCE56", "#36A2EB", "#000"],
    hoverBackgroundColor: ["#FFCE56", "#36A2EB", "#FFCE56"],
    borderWidth: 3,
  },
  {
    data: [10, 58, 41],
    backgroundColor: ["#FF6asd", "#000", "#FFCE56"],
    hoverBackgroundColor: ["#FF6384", "#000", "#FFCE56"],
    borderWidth: 3,
  },
];
const data = {};
export default function DonutChart() {
  const [selectChart, setSelectChart] = useState(0);
  let newData = {
    labels: ["Male", "Female", "Unknown"],
    datasets: [dataset[parseInt(selectChart)]],
  };
  console.log(newData);
  return (
    <ChartWrapper>
      <Box className="chart-parent">
        <Typography varient="p">Ad Insights</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <select onChange={(e) => setSelectChart(e.target.value)}>
            <option value="0">Clicks</option>
            <option value="0">Data 1</option>
            <option value="1">Data 2</option>
            <option value="2">Data 3</option>
          </select>
          <HelpOutlineIcon sx={{ color: "#dddbdb", marginLeft: "10px" }} />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Doughnut data={newData} />
        <Box
          sx={{ display: "flex", flexDirection: "column", marginLeft: "30px" }}
        >
          {newData &&
            newData.datasets[0].data.map((items, i) => {
              return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    className="color-wraper"
                    sx={{ background: newData.datasets[0].backgroundColor[i] }}
                  ></Box>
                  <Typography varient="p">
                    {items} {newData.labels[i]}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Box>
    </ChartWrapper>
  );
}
