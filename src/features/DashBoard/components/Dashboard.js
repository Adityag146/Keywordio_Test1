import React from "react";
import {
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  Grid,
  MenuItem,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Switch from "@mui/material/Switch";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";

import AdTable from "../../../app/GlobalComponents/Table";
import { DashboardWrapper } from "../style";
import AddChartTable from "./AddChartTable";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <Grid container>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <AdTable />
          </Grid>
          <Grid item xs={6} md={6}>
            <AddChartTable />
          </Grid>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
}
