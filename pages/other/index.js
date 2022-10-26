import Image from "next/image";
import React, { useEffect, useState } from "react";
import copertina from "../../images/copertina.jpg";
import styles from "./OtherC.module.css";
import { otherElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import { OutlinedInput, InputAdornment, IconButton, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BackToTop from "../components/BackToTop";

const Other = () => {
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
  const [categorySearch, setCategorySearch] = useState("");
  const [search, setSearch] = useState("");
  const [visibilityButtonToTop, setVisibilityButtonToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        return setVisibilityButtonToTop(true);
      }
      return setVisibilityButtonToTop(false);
    });
  }, []);

  return (
    <div style={{ padding: "2rem 3rem" }}>

      <Image src={copertina} />
      <p className={styles.title}>Altro</p>
      <p className={styles.subtitle}>
        In questa sezione troverai tante altre creazioni di Bigiotteria!
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "2rem",
        }}
      >
        <OutlinedInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: mathes ? "40%" : "90%" }}
          size="small"
          placeholder="Cerca..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary" />
            </InputAdornment>
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "2rem",
          padding: mathes ? "0rem" : "1rem"
        }}
      >
        <RadioGroup
          row
          value={categorySearch}
          onChange={(e) => (setCategorySearch(e.target.value))}>
          <FormControlLabel value="" control={<Radio />} label="Tutto" />
          <FormControlLabel value="Orecchini" control={<Radio />} label="Orecchini" />
          <FormControlLabel value="Bracciale" control={<Radio />} label="Bracciali" />
          <FormControlLabel value="Ciondolo" control={<Radio />} label="Ciondoli" />
          <FormControlLabel value="Completo" control={<Radio />} label="Completi" />
        </RadioGroup>
      </div>

      <div className={styles.wrapperGrid}>
        {otherElements
          .filter((elem) =>
            ((elem.title.toLowerCase().match(search.toLowerCase()) || elem.desc.toLowerCase().match(search.toLowerCase())) && (elem.cat.toLowerCase().match(categorySearch.toLowerCase())))
          )
          .map((filt) => (
            <SingleCard
              cat={filt.cat}
              category={filt.category}
              key={filt.id}
              title={filt.title}
              pics={filt.images}
              descr={filt.desc}
            ></SingleCard>
          ))}
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
};

export default Other;
