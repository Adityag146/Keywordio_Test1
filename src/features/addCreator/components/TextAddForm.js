import React from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import TextField from "@mui/material/TextField";
import { MediaAddWrapper } from "../style";

export default function TextAddForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <MediaAddWrapper>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
        Create Text & Media
      </Typography>
      <Grid container spacing={2}>
        <Grid container spacing={2} item xs={12} md={12}>
          <Grid item xs={6}>
            <Grid item xs={12} className="form-label-div">
              <label>Heading 01</label>
              <TextField defaultValue="Hello World" fullWidth />
            </Grid>
            <Grid
              item
              xs={12}
              className="form-label-div"
              sx={{ marginTop: "10px" }}
            >
              <label>Heading 02</label>
              <TextField defaultValue="Hello World" fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={6} className="form-label-div">
            <label>Description 01</label>
            <TextField defaultValue="Hello World" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12} md={12}>
          <Grid item xs={6} className="form-label-div">
            <label>Buisness Name</label>
            <TextField defaultValue="Hello World" fullWidth />
          </Grid>
          <Grid item xs={6} className="form-label-div">
            <label>Button Label </label>
            <FormControl sx={{ minWidth: "100%" }}>
              <Select
                value={age}
                sx={{ textAlign: "left" }}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} className="form-label-div">
          <label>Website URL</label>
          <TextField defaultValue="Hello World" fullWidth />
        </Grid>
      </Grid>
      <Box className="media-form-Button">
        <Button
          variant="outlined"
          xs={{ border: "1px solid #acacac", color: "#acacac" }}
        >
          Back
        </Button>
        <Button variant="contained" sx={{ marginLeft: "20px" }}>
          Submit
        </Button>
      </Box>
    </MediaAddWrapper>
  );
}
