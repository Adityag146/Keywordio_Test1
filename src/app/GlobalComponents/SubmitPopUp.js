import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Box, Button } from "@mui/material";
import { SubmitPopupWrapper } from "./style";
export default function SubmitPopUp({ open }) {
  return (
    <SubmitPopupWrapper>
      <Backdrop
        open={open}
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box
          className="popup_content"
          xs={{ width: "250px", margin: "0 auto" }}
        >
          <CheckCircleIcon />
          <Typography variant="p" sx={{ color: "#3e3e3e", fontSize: "22px" }}>
            Submitted
          </Typography>
        </Box>
      </Backdrop>
    </SubmitPopupWrapper>
  );
}
