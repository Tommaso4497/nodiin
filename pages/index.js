import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React, { useState } from "react";
import { uncinettoElements } from "../utilsFunction/utilsFunction";
import { IconButton, TextField, Typography } from "@mui/material";
import SingleCard from "./components/SingleCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import copertina from "../images/copertina.jpg";

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
      <Typography
        style={{
          backgroundColor: "#adc178",
          fontStyle: "italic",
          textAlign: "center",
        }}
        variant="h5"
      >
        Collane Chiacchierino
      </Typography>
      <div className={styles.carouselWrapper}>
        <Carousel responsive={responsiveCard}>
          {uncinettoElements.map((elem) => (
            <SingleCard
              key={elem.id}
              title={elem.title}
              image={mathes ? elem.imG : elem.img}
              imZ={elem.imZ}
              descr={elem.desc}
            ></SingleCard>
          ))}
        </Carousel>
      </div>

      <Typography
        style={{
          backgroundColor: "#adc178",
          fontStyle: "italic",
          textAlign: "center",
        }}
        variant="h5"
      >
        Orecchini Chiacchierino
      </Typography>
      <div className={styles.carouselWrapper}>
        <Carousel responsive={responsiveCard}>
          {uncinettoElements.map((elem) => (
            <SingleCard
              key={elem.id}
              title={elem.title}
              image={mathes ? elem.imG : elem.img}
              imZ={elem.imZ}
              descr={elem.desc}
            ></SingleCard>
          ))}
        </Carousel>
      </div>
      <Typography
        style={{
          backgroundColor: "#adc178",
          fontStyle: "italic",
          textAlign: "center",
        }}
        variant="h5"
      >
        Bracciali Chiacchierino
      </Typography>
      <div className={styles.carouselWrapper}>
        <Carousel responsive={responsiveCard}>
          {uncinettoElements.map((elem) => (
            <SingleCard
              key={elem.id}
              title={elem.title}
              image={mathes ? elem.imG : elem.img}
              imZ={elem.imZ}
              descr={elem.desc}
            ></SingleCard>
          ))}
        </Carousel>
      </div>

      <Typography
        style={{
          backgroundColor: "#adc178",
          fontStyle: "italic",
          textAlign: "center",
        }}
        variant="h5"
      >
        Completi in chiacchierino
      </Typography>
      <div className={styles.carouselWrapper}>
        <Carousel responsive={responsiveCard}>
          {uncinettoElements.map((elem) => (
            <SingleCard
              key={elem.id}
              title={elem.title}
              image={mathes ? elem.imG : elem.img}
              imZ={elem.imZ}
              descr={elem.desc}
            ></SingleCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
