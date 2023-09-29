import React, { useEffect, useState } from "react";
import theme from "../../styles/main";
import styles from "./Cotone.module.css"
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";

import { Cookies } from "next/headers";

const Cotone = () => {
  const [categorySearch, setCategorySearch] = useState("");
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [visibilityButtonToTop, setVisibilityButtonToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        return setVisibilityButtonToTop(true);
      }
      return setVisibilityButtonToTop(false);
    });
  }, []);

  return (
    <div>
      <div className={styles.pageTitle}>
        <p style={{ marginBlock: "0" }}>Cotone</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "2rem",
          padding: matches ? "0rem" : "1rem",
        }}
      >
        <RadioGroup
          style={{
            width: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
          row
          value={categorySearch}
          onChange={(e) => setCategorySearch(e.target.value)}
        >
          <FormControlLabel value="" control={<Radio />} label="Tutto" />
          <FormControlLabel
            value="EARRINGS"
            control={<Radio />}
            label="Orecchini"
          />
          <FormControlLabel
            value="BRACELETS"
            control={<Radio />}
            label="Bracciali"
          />
          <FormControlLabel
            value="PENDERS"
            control={<Radio />}
            label="Ciondoli"
          />
          <FormControlLabel
            value="COMPLETE"
            control={<Radio />}
            label="Completi"
          />
          <FormControlLabel value="OTHER" control={<Radio />} label="Altri" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default Cotone;
