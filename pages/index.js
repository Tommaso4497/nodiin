import { Button } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nodi in chiacchierino</title>
        <meta name="description" content="Gioielli in pizzo chiacchierino" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Button color="primary">Ciao</Button>
    </div>
  );
}
