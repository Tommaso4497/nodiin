import { FormControlLabel, InputAdornment, OutlinedInput, Radio, RadioGroup, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import copertina from "../../images/copertina.jpg";
import styles from "./Uncinetto.module.css";
import { uncinettoElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import SearchIcon from "@mui/icons-material/Search";

const Uncinetto = () => {
  const [search, setSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const mathes = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Image src={copertina} />
      <p className={styles.title}>Uncinetto</p>
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
        {uncinettoElements
          .filter((elem) =>
            ((elem.title.toLowerCase().match(search.toLowerCase()) || elem.desc.toLowerCase().match(search.toLowerCase())) && (elem.cat.toLowerCase().match(categorySearch.toLowerCase())))
          )
          .map((filt) => (
            <SingleCard
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
    </div>
  );
};

export default Uncinetto;
