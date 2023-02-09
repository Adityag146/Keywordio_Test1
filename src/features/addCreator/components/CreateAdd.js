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
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CretaeAddWrapper } from "../style";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CreateAdd() {
  const [selectForm, setSelectForm] = useState();
  return (
    <CretaeAddWrapper>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
        Create Text & Media
      </Typography>
      <Grid container spacing={2} className="select-add-parent">
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3} sx={{ height: 300, position: "relative" }}>
          <Box className="text-section" sx={{ height: 100 }}>
            <FormControlLabel control={<Checkbox />} />
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 220 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  variant="p"
                  sx={{ color: "#c4c4c4", fontSize: "14px" }}
                >
                  Create
                </Typography>
                <Typography variant="h6">Text Ad</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={3} sx={{ height: 300, position: "relative" }}>
          <Box className="text-section" sx={{ height: 100 }}>
            <FormControlLabel control={<Checkbox />} />
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 220 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography
                  variant="p"
                  sx={{ color: "#c4c4c4", fontSize: "14px" }}
                >
                  Create
                </Typography>
                <Typography variant="h6">Media Ad</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
      <Grid xs={12} className="media-form-Button">
        <Button variant="contained" sx={{ marginLeft: "20px" }}>
          Next
        </Button>
      </Grid>
    </CretaeAddWrapper>
  );
}
