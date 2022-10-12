import Image from "next/image";
import React from "react";
import copertina from "../../images/copertina.jpg";
import styles from "./other.module.css";
import { otherElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";

const Other = () => {
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div style={{padding:"2rem"}}>
      <Image src={copertina} />
      <p className={styles.title}>Altro</p>
      <p className={styles.subtitle}>
        In questa sezione troverai tanti altre creazioni!
      </p>
      <div className={styles.wrapperGrid}>
        {otherElements.map((elem) => (
          <SingleCard
            category={elem.category}
            key={elem.id}
            title={elem.title}
            image={mathes ? elem?.imG : elem?.img}
            imZ={elem.imZ}
            descr={elem.desc}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Other;
