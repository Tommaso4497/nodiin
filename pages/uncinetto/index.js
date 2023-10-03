import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
  const [categorySearch, setCategorySearch] = useState("ALL");
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

      <div role="group" className={styles.radioButtonWrapper}>
        <button onClick={()=>{setCategorySearch("ALL")}} className={categorySearch  === "ALL" ? styles.radioButtonActive : styles.radioButton}  >Tutti</button>
        <button onClick={()=>{setCategorySearch("EARRINGS")}} className={categorySearch  === "EARRINGS" ? styles.radioButtonActive : styles.radioButton}>Orecchini</button>
        <button onClick={()=>{setCategorySearch("BRACELETS")}} className={categorySearch == "BRACELETS" ? styles.radioButtonActive : styles.radioButton}>Bracciali</button>
        <button onClick={()=>{setCategorySearch("PENDERS")}} className={categorySearch  == "PENDERS" ? styles.radioButtonActive : styles.radioButton}>Ciondoli</button>
        <button onClick={()=>{setCategorySearch("COMPLETE")}} className={categorySearch  == "COMPLETE" ? styles.radioButtonActive : styles.radioButton}>Completi</button>
        <button onClick={()=>{setCategorySearch("OTHER")}} className={categorySearch  == "OTHER" ? styles.radioButtonActive : styles.radioButton}>Altri</button>
      </div>
      <div className={styles.wrapperGrid}>
        {elements
          .filter(
            (elem) =>
              elem.category === "Uncinetto" &&
              elem.product.toLowerCase().includes(categorySearch.toLowerCase())
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
