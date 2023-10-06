import Head from "next/head";
import styles from "../styles/Home.module.css";
import theme from "../styles/main";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import uncinetto from "../images/uncinetto.jpg";
import chiacchierino from "../images/chiacchierino.jpg";
import woman1 from "../images/woman1.png";
import woman2 from "../images/woman2.png";
import background from "../images/background.jpeg";
import esplosionedicolori from "../images/uncinetto/esplosionedicolori.jpg";
import turcheseinfuoco from "../images/uncinetto/turcheseinfuoco.png";
import { useRouter } from "next/router";
import BackToTop from "../components/BackToTop";
import ImageEdit from "../components/ImageEdit";

export default function Home() {
  const router = useRouter();

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
      <Head>
        <title>Nodi in chiacchierino</title>

        <meta name="application-name" content="Nodi in Chiacchierino" />
        <meta
          name="description"
          content="Gioielli realizzati a mano in pizzo chiacchierino, impreziositi con pietre, perle e cristalli."
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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="alternate" href=" " hrefLang="x-default" />
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
      <div className={styles.presentationCard}>
        <Image src={background} alt="backgroundImage" />
        <div className={styles.textIntroduction}>
          <p className={styles.description}>
            Benvenuti nel mio mondo creativo!<br /> <br/> Qui l&apos;arte
            dell&apos;uncinetto e del chiacchierino si fondono per dare vita a
            opere uniche e affascinanti.
            <br />
            <br />
            Troverete una varietà gioielli fatti a mano che aggiungono un tocco
            di eleganza a qualsiasi outfit.
            <br /> <br/>Ogni pezzo è unico, realizzato con cura e dedizione.
            <br /><br />
            L&apos;uncinetto e il chiacchierino sono tecniche antiche che hanno
            attraversato generazioni, <br /> eppure continuano ad affascinare e
            ispirare. <br />
            <br /> Con ago, filo e tanta passione, creo ricami impreziositi con
            pietre e cristalli.<br /><br />
            Per qualsiasi informazione, non esitare a <span className="link" onClick={()=>{router.push(`/contatti`)}}>contattarmi!</span>
          </p>
        </div>
      </div>
      <div className={styles.subtitleWrapper}>
        <p className={styles.paragraph}>Novità </p>
      </div>{" "}
      <div className={styles.uppergrid}>
        <div>
          <ImageEdit url={woman1} />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://it.freepik.com/foto-gratuito/bella-donna_6452293.htm#page=2&query=viso%20donna%20truccata%20profilo&position=36&from_view=search&track=ais"
          >
            Immagine di Racool_studio
          </a>{" "}
          su Freepik
        </div>
        <div>

        <ImageEdit url={esplosionedicolori} />
          <p>Esplosione di colori</p>
        </div>
        <div>
          <ImageEdit url={turcheseinfuoco} />
          <p>Turchese in fuoco</p>
        </div>
        <div>
          <ImageEdit url={woman2} />
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://it.freepik.com/foto-gratuito/profilo-di-una-giovane-donna-bellissima-con-la-pelle-fresca-e-pulita-isolata-su-bianco_10730984.htm#query=viso%20donna%20truccata%20profilo&position=10&from_view=search&track=ais"
          >
            Immagine di valuavitaly
          </a>{" "}
          su Freepik
        </div>
      </div>
      <div className={styles.subtitleWrapper}>
        <p className={styles.paragraph}>
          Per altre creazioni visita i nostri cataloghi!
        </p>
      </div>
      <div className={styles.gridWrapper}>
        <div
          className={styles.clickableImage}
          onClick={() => router.push("/chiacchierino")}
        >
          <ImageEdit url={chiacchierino} alt="chiacchierinoBackground" />
        </div>
        <div
          className={styles.clickableImage}
          onClick={() => {
            router.push("/uncinetto");
          }}
        >
          <ImageEdit url={uncinetto} alt="uncinettoBackground" />
        </div>
      </div>
      {visibilityButtonToTop && <BackToTop />}
    </div>
  );
}
