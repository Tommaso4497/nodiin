import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React from "react";
import Card from "./components/Card";
import { uncinettoElements } from "../utilsFunction/utilsFunction";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const matches = useMediaQuery(theme.breakpoints.up("sm"));


  return (
    <div className={styles.container}>
      <Head>
        <title>Nodi in chiacchierino</title>
        <meta name="description" content="Gioielli in pizzo chiacchierino" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h2>Ultime creazioni</h2>
      <div style={{ padding: "2rem", display: "grid", gridTemplateColumns: matches ? "1fr 1fr 1fr" : "1fr", gap: "4rem" }}>

        {uncinettoElements.map((elem) => (
          <Card key={elem.id} title={elem.title} image={elem.img} descr={elem.desc}></Card>
        ))}

      </div>
    </div >
  );
}
