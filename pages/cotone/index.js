import React, { useEffect, useState } from "react";
import theme from "../../styles/main";
import styles from "./Cotone.module.css";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";
import RadioMenu from "../../components/RadioMenu";
import { category, elements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../../components/SingleCard";
import BackToTop from "../../components/BackToTop";

const Cotone = () => {
  const [categorySearch, setCategorySearch] = useState("ALL");
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
      <RadioMenu elements={category} setCategory={setCategorySearch} />
      <div className={styles.wrapperGrid}>
        {elements
          .filter(
            (elem) =>
              elem.category === "Cotone" &&
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

export default Cotone;
