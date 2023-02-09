import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  Grid,
  MenuItem,
} from "@mui/material";
import { AddChartWrapper } from "../style";
import IconButton from "@mui/material/IconButton";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Switch from "@mui/material/Switch";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import DonutChart from "../../../app/GlobalComponents/Chart";
import AdTable from "../../../app/GlobalComponents/Table";
import { DashboardWrapper } from "../style";

export default function AddChartTable() {
  const [showContent, setShowContent] = useState(true);
  const handleChart = (e) => {
    setShowContent(true);
  };

  const handleAd = (e) => {
    setShowContent(false);
  };
  return (
    <AddChartWrapper>
      <Box className="switch-content" sx={{ background: "#fff" }}>
        <Box className="switch-btn">
          <IconButton
            onClick={(e) => handleChart(e)}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <DataSaverOffIcon />
          </IconButton>
          <IconButton
            onClick={() => handleAd()}
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <TableChartOutlinedIcon />
          </IconButton>
        </Box>
        {showContent && <DonutChart />}
        {showContent == false && <AdTable />}
      </Box>
    </AddChartWrapper>
  );
}
