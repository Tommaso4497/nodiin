import React, { useEffect, useState } from "react";
import Image from "next/image";
import copertina from "../../images/copertina.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "./Chiacchierino.module.css";
import { elements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import BackToTop from "../../components/BackToTop";

const Chiacchierino = () => {
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={copertina} alt="chiacchierinoBackground" />
      </div>
      <div className={styles.pageTitle}>
        <p style={{ marginBlock: "0" }}>Chiacchierino</p>
      </div>
      <p className={styles.subtitle}>
        In questa sezione troverai tutte le mie creazioni in Chiacchierino!
      </p>
      <div
        style={{
          paddingBottom: "2rem",
          padding: mathes ? "0rem" : "1rem",
        }}
      >
        <RadioGroup
          style={{ width:"auto", display:"flex", justifyContent:"space-between" }}
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

      <div className={styles.wrapperGrid}>
        {elements
          .filter(
            (elem) =>
              elem.category === "Chiacchierino" &&
              elem.product.toLowerCase().match(categorySearch.toLowerCase())
          )
          // (elem.title.toLowerCase().match(search.toLowerCase()) ||
          //   elem.desc.toLowerCase().match(search.toLowerCase())) )
          .map((filt) => (
            <SingleCard
              category={filt.category}
              key={filt.id}
              title={filt.title}
              image={filt?.image}
              descr={filt.desc}
            ></SingleCard>
          ))}
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
};

export default Chiacchierino;
