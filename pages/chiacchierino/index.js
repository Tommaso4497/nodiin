import React, { useEffect, useState } from "react";
import Image from "next/image";
import copertina from "../../images/copertina.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
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
  const [categorySearch, setCategorySearch] = useState("ALL");
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [visibilityButtonToTop, setVisibilityButtonToTop] = useState(false);

  console.log("state:",categorySearch)

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
      ></div>
      <div className={styles.pageTitle}>
        <p style={{ marginBlock: "0" }}>Chiacchierino</p>
      </div>
      <p className={styles.subtitle}>
        In questa sezione troverai tutte le mie creazioni in Chiacchierino!
      </p>
      <div role="group" className={styles.radioButtonWrapper}>
        <Button onClick={()=>{setCategorySearch("ALL"); console.log(categorySearch)}} className={categorySearch == "ALL" ? styles.radioButtonActive : styles.radioButton} >Tutti</Button>
        <Button onClick={()=>{setCategorySearch("EARRINGS")}} className={categorySearch  == "EARRINGS" ? styles.radioButtonActive : styles.radioButton}>Orecchini</Button>
        <Button onClick={()=>{setCategorySearch("BRACELETS")}} className={categorySearch == "BRACELETS" ? styles.radioButtonActive : styles.radioButton}>Bracciali</Button>
        <Button onClick={()=>{setCategorySearch("PENDERS")}} className={categorySearch  == "PENDERS" ? styles.radioButtonActive : styles.radioButton}>Ciondoli</Button>
        <Button onClick={()=>{setCategorySearch("COMPLETE")}} className={categorySearch  == "COMPLETE" ? styles.radioButtonActive : styles.radioButton}>Completi</Button>
        <Button onClick={()=>{setCategorySearch("OTHER")}} className={categorySearch  == "OTHER" ? styles.radioButtonActive : styles.radioButton}>Altri</Button>
      </div>

      <div className={styles.wrapperGrid}>
        {elements
          .filter(
            (elem) =>
              elem.category === "Chiacchierino" &&
              elem.product.toLowerCase().includes(categorySearch.toLowerCase())
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
