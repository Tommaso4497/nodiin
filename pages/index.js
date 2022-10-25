import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React, { useState } from "react";
import { necklaceElements } from "../utilsFunction/utilsFunction";
import { Divider, IconButton, TextField, Typography } from "@mui/material";
import SingleCard from "./components/SingleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import copertina from "../images/copertina.jpg";
import collana01 from "../images/Collana001.jpg";
import uncinetto from "../images/uncinetto.jpg";
import chiacchierino from "../images/chiacchierino.jpg";
import altro from "../images/altro.jpg";
import { useRouter } from "next/router";

export default function Home() {
  const mathes = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  const responsiveCard = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

        <meta name="application-name" content="Nodi in Chiacchierino" />
        <meta
          name="description"
          content="La passione per l'intreccio dei fili, dà origine a veri e propri gioielli fatti a mano e impreziositi da pietre e cristalli"
        />
        <meta
          name="keywords"
          content="Chiacchierino, Uncinetto, Gioelli, Accessori, Donna, Regalo, Handmade, Pizzo, Pietre, Cristalli,Bracciali, Collane, Orecchini"
        />
        <meta name="author" content="Nodi in Chiacchierino" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="imagemode" content="force" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta
          name="apple-mobile-web-app-title"
          content="Nodi in Chiacchierino"
        />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="theme-color" content="Metti un colore" />
        <meta name="msapplication-TileColor" content="Metti un colore" />
        <meta property="og:title" content="Nodi in Chiacchierino" />
        <meta property="og:image" content="/favicon-32x32.png" />
        <meta property="og:url" content="https://nodiinchiacchierino.it/" />
        <meta
          property="og:description"
          content="La passione per l'intreccio dei fili, dà origine a veri e propri gioielli fatti a mano e impreziositi da pietre e cristalli "
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:site_name" content="Nodi in Chiacchierino" />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="alternate" href=" " hreflang="x-default" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="https://www.nodiinchiacchierino.it/sitemap-0.xml"
        />

        <meta
          name="google-site-verification"
          content="AUeL2WPQ7Rs2x1Oi6qjqRsi2qtCIItxZWfHMKuL4eUU"
        />
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

      <p className={styles.pageTitle}>Nodi in Chiacchierino</p>
      <div className={styles.headerCarousel}>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          arrows={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dynamicHeight={true}
          autoPlaySpeed={4000}
        >
          <Image src={mathes ? copertina : collana01} placeholder="blur" />
          <Image src={mathes ? copertina : collana01} placeholder="blur" />
          <Image src={mathes ? copertina : collana01} placeholder="blur" />
          <Image src={mathes ? copertina : collana01} placeholder="blur" />
        </Carousel>
      </div>
      <p className={styles.title}> Le ultime creazioni</p>
      <p className={styles.subtitle}>
        In questa sezione troverai tutte le mie ultime creazioni!
      </p>
      <div className={styles.carouselWrapper}>
        <Carousel responsive={responsiveCard}>
          {necklaceElements.map((elem) => (
            <SingleCard
              category={elem.category}
              key={elem.id}
              title={elem.title}
              pics={elem?.images}
              descr={elem.desc}
              cat={elem.cat}
            ></SingleCard>
          ))}
        </Carousel>
      </div>
      <p className={styles.subtitle}>
        Per altre creazioni visita i nostri cataloghi!
      </p>
      <div className={styles.gridWrapper}>
        <div
          className={styles.category}
          onClick={() => router.push("chiacchierino/")}
        >
          <Image
            src={chiacchierino}
            alt="Chiacchierino background"
            placeholder="blur"
          />
          <p className={styles.categoryTitle}>Chiacchierino</p>
        </div>
        <div
          className={styles.category}
          onClick={() => router.push("uncinetto/")}
        >
          <Image
            src={uncinetto}
            alt="Uncinetto background"
            placeholder="blur"
          />
          <p className={styles.categoryTitle}>Uncinetto</p>
        </div>
        <div className={styles.category} onClick={() => router.push("other/")}>
          <Image src={altro} alt="Altro background" placeholder="blur" />
          <p className={styles.categoryTitle}>Altro</p>
        </div>
      </div>
    </div>
  );
}
