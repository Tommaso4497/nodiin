import { Fab, Tooltip } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const BackToTop = () => {
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const scrolling = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };
  return (
    <>
      {matches && (
        <div>
          <Tooltip title="Torna su">
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
      )}
    </>
  );
};

export default BackToTop;
