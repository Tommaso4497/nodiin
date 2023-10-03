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

      <div role="group" className="radioButtonWrapper">
        <Button onClick={()=>{setCategorySearch("")}} className={categorySearch  == "" ? "radioButtonActive" : "radioButton"}  >Tutti</Button>
        <Button onClick={()=>{setCategorySearch("EARRINGS")}} className={categorySearch  == "EARRINGS" ? "radioButtonActive" : "radioButton"}>Orecchini</Button>
        <Button onClick={()=>{setCategorySearch("BRACELETS")}} className={categorySearch == "BRACELETS" ? "radioButtonActive" : "radioButton"}>Bracciali</Button>
        <Button onClick={()=>{setCategorySearch("PENDERS")}} className={categorySearch  == "PENDERS" ? "radioButtonActive" : "radioButton"}>Ciondoli</Button>
        <Button onClick={()=>{setCategorySearch("COMPLETE")}} className={categorySearch  == "COMPLETE" ? "radioButtonActive" : "radioButton"}>Completi</Button>
        <Button onClick={()=>{setCategorySearch("OTHER")}} className={categorySearch  == "OTHER" ? "radioButtonActive" : "radioButton"}>Altri</Button>
      </div>
      <div className={styles.wrapperGrid}>
        {elements
          .filter(
            (elem) =>
              elem.category === "Uncinetto" &&
              elem.product.toLowerCase().match(categorySearch.toLowerCase())
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
