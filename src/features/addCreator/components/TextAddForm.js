import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Box,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { MediaAddWrapper } from "../style";
import SubmitPopUp from "../../../app/GlobalComponents/SubmitPopUp";

export default function TextAddForm() {
  const textFormData = {
    Heading1: "",
    Heading2: "",
    Description1: "",
    BuisnessName: "",
    ButtonLabel: "",
    WebsiteUrl: "",
  };
  // const [age, setAge] = React.useState("");
  const [textForm, setTextForm] = useState(textFormData);
  const [open, setOpen] = useState(false);

  const submitMediaFrom = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      navigate("/create-add");
    }, 600);
  };
  const handleChange = (e) => {
    setTextForm({ ...textForm, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(textForm);
  };
  const handleBackButton = () => {
    navigate("/create-add");
  };
  return (
    <MediaAddWrapper>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
        Create Text & Media
      </Typography>
      <Grid container spacing={2}>
        <Grid container spacing={2} item xs={12} md={12}>
          <Grid item xs={12} sm={6}>
            <Grid item xs={12} className="form-label-div">
              <label>Heading 01</label>
              <TextField
                onChange={(e) => handleChange(e)}
                name="Heading1"
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              className="form-label-div"
              sx={{ marginTop: "10px" }}
            >
              <label>Heading 02</label>
              <TextField
                onChange={(e) => handleChange(e)}
                name="Heading2"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} className="form-label-div">
            <label>Description 01</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="Description1"
              multiline
              className="description-Input"
              rows={5}
              maxRows={10}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} item xs={12} md={12}>
          <Grid item xs={12} sm={6} className="form-label-div">
            <label>Buisness Name</label>
            <TextField
              onChange={(e) => handleChange(e)}
              name="BuisnessName"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} className="form-label-div">
            <label>Button Label </label>
            <FormControl sx={{ minWidth: "100%" }}>
              <Select
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
          onClick={() => handleBackButton()}
          xs={{ border: "1px solid #acacac", color: "#acacac" }}
        >
          Back
        </Button>
        <Button
          onClick={() => submitMediaFrom()}
          variant="contained"
          sx={{ marginLeft: "20px" }}
        >
          Submit
        </Button>
        <SubmitPopUp open={open} />
      </Box>
    </MediaAddWrapper>
  );
}
