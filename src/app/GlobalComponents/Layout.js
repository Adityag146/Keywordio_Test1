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
import { DashboardWrapper } from "./style";
import AdTable from "./Table";
export default function Layout() {
  return (
    <DashboardWrapper>
      <Grid container>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <AdTable />
          </Grid>
          <Grid item xs={6} md={6}>
            <AdTable />
          </Grid>
        </Grid>
      </Grid>
    </DashboardWrapper>
  );
}
