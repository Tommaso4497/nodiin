import { Fab, Tooltip } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackToTop = () => {
  const scrolling = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Tooltip title="Torna su"  >
        <Fab
          color="primary"
          onClick={scrolling}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
          }}
        >
          <ArrowUpwardIcon color="#fff" />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default BackToTop;
