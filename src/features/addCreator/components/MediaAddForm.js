import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Typography, Box, FormControl, Select, MenuItem } from "@mui/material";
import { MediaAddWrapper } from "../style";
import Button from "@mui/material/Button";

export default function MediaAddForm() {
  const mediaFormData = {
    heading1: "",
    heading2: "",
    description1: "",
    LandscapeMarketingImage: "",
    PortraitMarketingImage: "",
    SquareMarketingImage: "",
    VideoUrl: "",
    BuisnessName: "",
    ButtonLabel: "",
    WebsiteUrl: "",
  };
  const [mediaFormInput, setMediaFormInput] = useState(mediaFormData);
  const handleChange = (e) => {
    setMediaFormInput({ ...mediaFormInput, [e.target.name]: e.target.value });
    // console.log(mediaFormInput);
  };

  const submitMediaFrom = () => {
    console.log(mediaFormInput);
  };
  const [age, setAge] = React.useState("");
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
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
              <TextField
                onChange={(e) => handleChange(e)}
                name="heading1"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              className="form-label-div"
              sx={{ marginTop: "10px" }}
            >
              <label>Heading 02</label>
              <TextField
                onChange={(e) => handleChange(e)}
                name="heading2"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={6} className="form-label-div">
            <label>Description 01</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="description1"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12} md={12}>
          <Grid item xs={4} className="form-label-div">
            <label>Landscape Marketig Image(1:9:1)</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="LandscapeMarketingImage"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} className="form-label-div">
            <label>Portrait MArketing Image(4:5)</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="PortraitMarketingImage"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} className="form-label-div">
            <label>Square Marketig Image(1:1)</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="SquareMarketingImage"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12} className="form-label-div">
          <label>Video URL</label>
          <TextField
            onChange={(e) => handleChange(e)}
            name="VideoUrl"
            fullWidth
          />
        </Grid>
        <Grid container spacing={2} item xs={12} md={12}>
          <Grid item xs={6} className="form-label-div">
            <label>Buisness Name</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="BuisnessName"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} className="form-label-div">
            <label>Button Label </label>
            <FormControl sx={{ minWidth: "100%" }}>
              <Select
                value={age}
                name="ButtonLabel"
                sx={{ textAlign: "left" }}
                onChange={(e) => handleChange(e)}
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
          <TextField
            onChange={(e) => handleChange(e)}
            name="WebsiteUrl"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box className="media-form-Button">
        <Button
          variant="outlined"
          xs={{ border: "1px solid #acacac", color: "#acacac" }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => submitMediaFrom()}
          sx={{ marginLeft: "20px" }}
        >
          Submit
        </Button>
      </Box>
    </MediaAddWrapper>
  );
}
