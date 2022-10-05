import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React from "react";
import { uncinettoElements } from "../utilsFunction/utilsFunction";
import { Typography } from "@mui/material";
import SingleCard from "./components/SingleCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

import copertina from "../images/copertina.jpg";
import { padding } from "@mui/system";


export default function Home() {

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
      <Typography
        variant="h4"
        style={{ fontStyle: "italic", marginTop: "1rem", textAlign: "center" }}
      >
        Le mie creazioni
      </Typography>
      <div style={{ padding: "2rem" }}>
        <Carousel autoPlay showArrows={false} showStatus={false} infiniteLoop dynamicHeight >
          <div>
            <Image src={copertina} />,
          </div>
          <div>
            <Image src={copertina} />,
          </div>
          <div>
            <Image src={copertina} />,
          </div>
        </Carousel>
      </div>

      <Typography style={{ backgroundColor: "#adc178", fontStyle: "italic", textAlign: "center" }} variant="h5"
      >Collane in chiacchierino</Typography>
      <div className={styles.gridWrapper}>
        {uncinettoElements.map((elem) => (
          <SingleCard
            key={elem.id}
            title={elem.title}
            image={elem.img}
            descr={elem.desc}
          ></SingleCard>
        ))}
      </div>
    </div >
  );
}
