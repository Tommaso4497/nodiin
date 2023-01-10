import {
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import copertina from "../../images/copertina.jpeg";
import styles from "./Uncinetto.module.css";
import { elements, uncinettoElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import SearchIcon from "@mui/icons-material/Search";
import BackToTop from "../components/BackToTop";
import ImageEdit from "../components/ImageEdit";
import Image from "next/image";

const Uncinetto = () => {
  const [search, setSearch] = useState("");
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={copertina} alt="crochetBackground" />
      </div>
      <div className={styles.pageTitle}>
        <p style={{ marginBlock: "0" }}>Uncinetto</p>
      </div>
      <p className={styles.subtitle}>
        In questa sezione troverai tutte le mie creazioni in Uncinetto!
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
          style={{ width: matches ? "40%" : "90%" }}
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
          padding: matches ? "0rem" : "1rem",
        }}
      >
        <RadioGroup
          row
          value={categorySearch}
          onChange={(e) => setCategorySearch(e.target.value)}
        >
          <FormControlLabel value="" control={<Radio />} label="Tutto" />
          <FormControlLabel
            value="Orecchini"
            control={<Radio />}
            label="Orecchini"
          />
          <FormControlLabel
            value="Bracciale"
            control={<Radio />}
            label="Bracciali"
          />
          <FormControlLabel
            value="Ciondolo"
            control={<Radio />}
            label="Ciondoli"
          />
          <FormControlLabel
            value="Completo"
            control={<Radio />}
            label="Completi"
          />
        </RadioGroup>
      </div>

      <div className={styles.wrapperGrid}>
        {elements
          .filter(
            (elem) =>
              elem.category === "Uncinetto" &&
              (elem.title.toLowerCase().match(search.toLowerCase()) ||
                elem.desc.toLowerCase().match(search.toLowerCase())) &&
              elem.cat.toLowerCase().match(categorySearch.toLowerCase())
          )
          .map((filt) => (
            <SingleCard
              size={filt.size}
              cat={filt.cat}
              category={filt.category}
              key={filt.id}
              title={filt.title}
              pics={filt?.images}
              imZ={filt.imZ}
              descr={filt.desc}
            ></SingleCard>
          ))}
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
};

export default Uncinetto;
