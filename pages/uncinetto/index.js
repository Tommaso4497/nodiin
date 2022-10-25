import { InputAdornment, OutlinedInput, Typography } from "@mui/material";
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
      <div className={styles.wrapperGrid}>
        {uncinettoElements
          .filter((elem) =>
            elem.title.toLowerCase().match(search.toLowerCase())
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
