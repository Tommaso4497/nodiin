import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React, { useState } from "react";
import { necklaceElements } from "../utilsFunction/utilsFunction";
import { IconButton, TextField, Typography } from "@mui/material";
import SingleCard from "./components/SingleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import copertina from "../images/copertina.jpg";
import uncinetto from "../images/uncinetto.jpg";
import chiacchierino from "../images/chiacchierino.jpg";
import altro from "../images/altro.jpg";
import { SERVER_FILES_MANIFEST } from "next/dist/shared/lib/constants";

export default function Home() {
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
  const responsiveCard = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Head>
        <title>Nodi in chiacchierino</title>
        <meta name="description" content="Gioielli in pizzo chiacchierino" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={styles.headerCarousel}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          showDots={true}
          arrows={false}
          autoPlaySpeed={4000}
        >
          <Image src={copertina} />
          <Image src={copertina} />
          <Image src={copertina} />
          <Image src={copertina} />
        </Carousel>
      </div>
      <p className={styles.title}> Le ultime creazioni</p>
      <p className={styles.subtitle}
      >
        In questa sezione troverai tutte le mie ultime creazioni!
      </p>
      <div className={styles.carouselWrapper}>
        <Carousel responsive={responsiveCard}>
          {necklaceElements.map((elem) => (
            <SingleCard
              category={elem.category}
              key={elem.id}
              title={elem.title}
              image={mathes ? elem.imG : elem.img}
              imZ={elem.imZ}
              descr={elem.desc}
            ></SingleCard>
          ))}
        </Carousel>
      </div>

      <p className={styles.subtitle}
      >
        Per altre creazioni visita i cataloghi!
      </p>

      <div className={styles.gridWrapper}>
        <div>
          <Image src={chiacchierino} className={styles.image}/>
          chiacchierino
        </div>
        <div>
          <Image className={styles.image} src={uncinetto} />
          Uncinetto
        </div>
        <div>
          <Image className={styles.image} src={altro}/>
          Altro</div>
      </div>
    </div>
  );
}
