import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React from "react";
import Card from "./components/Card";
import { uncinettoElements } from "../utilsFunction/utilsFunction";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";

export default function Home() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={styles.container}>
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
        Ultime creazioni
      </Typography>
      <div
        style={{
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: matches ? "1fr 1fr 1fr" : "1fr",
          gap: "4rem",
        }}
      >
        {uncinettoElements.map((elem) => (
          <Card
            key={elem.id}
            title={elem.title}
            image={elem.img}
            descr={elem.desc}
          ></Card>
        ))}
      </div>
    </div>
  );
}
