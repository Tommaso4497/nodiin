import Image from "next/image";
import React, { useState } from "react";
import copertina from "../../images/copertina.jpg";
import styles from "./OtherC.module.css";
import { otherElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import { OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Other = () => {
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
  const [search, setSearch] = useState("");
  console.log(search)
  return (
    <div style={{ padding: "2rem" }}>
      <Image src={copertina} />
      <p className={styles.title}>Altro</p>
      <p className={styles.subtitle}>
        In questa sezione troverai tanti altre creazioni!
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OutlinedInput
        value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "40%" }}
          size="small"
          placeholder="Cerca..."
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon color="primary"/>
            </InputAdornment>
          }
        />
      </div>
      <div className={styles.wrapperGrid}>
        {otherElements.filter(elem => (elem.title.toLowerCase().match(search.toLowerCase()))).map((filt) => (
          <SingleCard
            category={filt.category}
            key={filt.id}
            title={filt.title}
            image={mathes ? filt?.imG : filt?.img}
            imZ={filt.imZ}
            descr={filt.desc}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Other;
