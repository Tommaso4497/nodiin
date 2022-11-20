import {
  FormControlLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import copertina from "../../images/copertina.jpg";
import styles from "./Uncinetto.module.css";
import { uncinettoElements } from "../../utilsFunction/utilsFunction";
import SingleCard from "../components/SingleCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import theme from "../../styles/main";
import SearchIcon from "@mui/icons-material/Search";
import sfere from "../../images/christmasImage/sfere.svg";
import BackToTop from "../components/BackToTop";
import ImageEdit from "../components/ImageEdit";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";


const Uncinetto = () => {
  const [search, setSearch] = useState("");
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
      <Image src={copertina} alt="crochetBackground" />
      <div className={styles.pageTitle}>
        <ImageEdit
          url={sfere}
          w={matches ? "" : "30"}
          h={matches ? "" : "30"}
        />
        <p style={{ marginBlock: "0" }}>Uncinetto</p>
        <ImageEdit
          url={sfere}
          w={matches ? "" : "30"}
          h={matches ? "" : "30"}
        />
      </div>
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
          style={{ width: matches ? "40%" : "90%" }}
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
          padding: matches ? "0rem" : "1rem",
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
      <div
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{fontFamily:"sans-serif"}}>Cerca per colore...</p>
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Tooltip title="Tutti">
            <div className={styles.all}>T</div>
          </Tooltip>
          <Tooltip title="Bianco">
            <CircleIcon
              style={{
                fill: "white",
                marginRight: "1rem",
                cursor: "pointer",
                stroke: "#000",
              }}
            />
          </Tooltip>
          <Tooltip title="Rosa">
            <CircleIcon
              style={{ fill: "pink", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Viola">
            <CircleIcon
              style={{ fill: "purple", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Rosso">
            <CircleIcon
              style={{ fill: "red", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Arancione">
            <CircleIcon
              style={{ fill: "orange", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Oro">
            <CircleIcon
              style={{ fill: "gold", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Giallo">
            <CircleIcon style={{ fill: "yellow", cursor: "pointer" }} />
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Tooltip title="Verde Chiaro">
            <CircleIcon
              style={{
                fill: "lightgreen",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip title="Verde Scuro">
            <CircleIcon
              style={{ fill: "green", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Azzurro">
            <CircleIcon
              style={{
                fill: "#00AAE4",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip title="Blu">
            <CircleIcon
              style={{ fill: "#00f", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Argento">
            <CircleIcon
              style={{ fill: "silver", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Beige">
            <CircleIcon
              style={{
                fill: "#E1C699",
                marginRight: "1rem",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip title="Nero">
            <CircleIcon
              style={{ fill: "black", marginRight: "1rem", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Multicolor">
            <div className={styles.rainbow} />
          </Tooltip>
        </div>
      </div>
      <div className={styles.wrapperGrid}>
        {uncinettoElements
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
              imZ={filt.imZ}
              descr={filt.desc}
            ></SingleCard>
          ))}
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
};

export default Uncinetto;
