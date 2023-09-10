import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import copertina from "../../images/cover/donnaorecchini.png";
import styles from "./Uncinetto.module.css";
import { elements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import BackToTop from "../../components/BackToTop";
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
        {/* <Image src={copertina} alt="crochetBackground" width={500} height={500} /> */}
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
              (elem.category === "Uncinetto")
              //  &&
              // (elem.title.toLowerCase().match(search.toLowerCase()) ||
              //   elem.desc.toLowerCase().match(search.toLowerCase()))
          )
          .map((filt) => (
            <SingleCard
              image={filt.image}
              category={filt.category}
              key={filt.id}
              title={filt.title}
              descr={filt.desc}
            ></SingleCard>
          ))}
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
};

export default Uncinetto;
