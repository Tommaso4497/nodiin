import React, { useState } from "react";
import Image from "next/image";
import copertina from "../../images/copertina.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, OutlinedInput } from "@mui/material";
import styles from "./Chiacchierino.module.css";
import { chiacchierinoElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const Chiacchierino = () => {
  const [search, setSearch] = useState("");
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <Image src={copertina} />
      <p className={styles.title}>Chiacchierino</p>
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
      <div className={styles.wrapperGrid}>
        {chiacchierinoElements
          .filter((elem) =>
            elem.title.toLowerCase().match(search.toLowerCase())
          )
          .map((filt) => (
            <SingleCard
              cat={filt.cat}
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

export default Chiacchierino;
