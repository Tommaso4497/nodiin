import React, { useState } from "react";
import Image from "next/image";
import copertina from "../../images/copertina.jpg";
import SearchIcon from "@mui/icons-material/Search";
import {
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
} from "@mui/material";
import styles from "./Chiacchierino.module.css";
import { chiacchierinoElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import BackToTop from "../components/BackToTop";
import tree from "../../images/christmasImage/tree.svg";

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
      <Image src={copertina} />
      <div className={styles.pageTitle}>
        <Image src={tree} />
        <p style={{ marginBlock: "0" }}>Chiacchierino</p>
        <Image src={tree} />
      </div>
      <p className={styles.subtitle}>
        In questa sezione troverai tutte le mie creazioni in Chiacchierino!
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
          padding: mathes ? "0rem" : "1rem",
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
        {chiacchierinoElements
          .filter(
            (elem) =>
              (elem.title.toLowerCase().match(search.toLowerCase()) ||
                elem.desc.toLowerCase().match(search.toLowerCase())) &&
              elem.cat.toLowerCase().match(categorySearch.toLowerCase())
          )
          .map((filt) => (
            <SingleCard
              cat={filt.cat}
              category={filt.category}
              key={filt.id}
              title={filt.title}
              pics={filt?.images}
              descr={filt.desc}
            ></SingleCard>
          ))}
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
};

export default Chiacchierino;
