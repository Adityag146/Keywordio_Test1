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
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CretaeAddWrapper } from "../style";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CreateAdd() {
  const [selectmediaForm, setmediaSelectForm] = useState(false);
  const [selecttextForm, settextSelectForm] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const submitForm = (e) => {
    if (selecttextForm) {
      navigate("/textAddForm");
    } else if (selectmediaForm) {
      navigate("/mediaAddForm");
    }
  };
  const handleChange = (e, name) => {
    console.log(e);
    if (name == "MediaAddchk") setmediaSelectForm(e.target.checked);
    if (name == "TextAddchk") settextSelectForm(e.target.checked);
  };

  return (
    <CretaeAddWrapper>
      <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
        Create Text & Media
      </Typography>
      <Grid container spacing={2} className="select-add-parent">
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={3} sm={6} sx={{ position: "relative" }}>
          <Box className="text-section">
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => handleChange(e, "TextAddchk")} />
              }
            />
            <Card sx={{ maxWidth: 345 }}>
              <img src="images/mobTexr.png" />

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
        <Grid
          item
          sm={6}
          xs={12}
          md={3}
          sx={{ height: 300, position: "relative" }}
        >
          <Box className="text-section" sx={{ height: 100 }}>
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => handleChange(e, "MediaAddchk")} />
              }
            />
            <Card sx={{ maxWidth: 345 }}>
              <img src="images/Text.png" />

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
        <Button
          variant="contained"
          sx={{ marginLeft: "20px" }}
          onClick={(e) => submitForm(e)}
          disabled={
            !(selecttextForm || selectmediaForm) ||
            !(!selecttextForm || !selectmediaForm)
          }
        >
          Next
        </Button>
      </Grid>
    </CretaeAddWrapper>
  );
}
