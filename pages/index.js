import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import Copertina from "../images/copertina.jpg";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nodi in chiacchierino</title>
        <meta name="description" content="Gioielli in pizzo chiacchierino" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Image src={Copertina} layout="responsive" />
      <div style={{ textAlign: "center" }}>
      </div>
    </div>
  );
}
