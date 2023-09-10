import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import { v4 as uuidv4 } from "uuid";

import pokeball from "../images/amigrumi/pokeball.jpeg";
import pallinaMinions from "../images/amigrumi/pallina_minions.jpeg";
import polipetto from "../images/amigrumi/polipetto.jpeg";
import pinguino from "../images/amigrumi/pinguino.png";
import balenottere from "../images/amigrumi/balenottere.jpeg";
import smileHearts from "../images/amigrumi/smileHearts.jpeg";
import orsetto from "../images/amigrumi/orsetto.jpeg";
import polipi from "../images/amigrumi/polipi.jpeg";
import polipetti from "../images/amigrumi/polipetti.jpeg";
import panda from "../images/amigrumi/panda.jpeg";
import minionsBall from "../images/amigrumi/pallinaminions.jpeg";
import minions3 from "../images/amigrumi/minions3.jpeg";
import minions4 from "../images/amigrumi/minions4.jpeg";
import smile from "../images/amigrumi/smile.jpeg";
import spring from "../images/amigrumi/spring.jpeg";
import draghetto from "../images/amigrumi/draghetto.jpeg";


import uncinetto17 from "../images/uncinetto/uncinetto17.webp";
import uncinetto18 from "../images/uncinetto/uncinetto18.webp";
import uncinetto19 from "../images/uncinetto/uncinetto19.webp";
import uncinetto20 from "../images/uncinetto/uncinetto20.webp";
import uncinetto21 from "../images/uncinetto/uncinetto21.webp";
import uncinetto22 from "../images/uncinetto/uncinetto22.webp";
import uncinetto23 from "../images/uncinetto/uncinetto23.webp";
import uncinetto24 from "../images/uncinetto/uncinetto24.webp";
import uncinetto25 from "../images/uncinetto/uncinetto25.webp";
import uncinetto26 from "../images/uncinetto/uncinetto26.webp";
import uncinetto27 from "../images/uncinetto/uncinetto27.webp";
import uncinetto28 from "../images/uncinetto/uncinetto28.webp";
import uncinetto29 from "../images/uncinetto/uncinetto29.webp";
import uncinetto30 from "../images/uncinetto/uncinetto30.webp";


import esplosionedicolori from "../images/uncinetto/esplosionedicolori.jpg";
import riflessidinatura from "../images/uncinetto/riflessidinatura.jpg";
import ciondoloriflessidinatura from "../images/uncinetto/ciondoloriflessidinatura.webp";
import turcheseinfuoco from "../images/uncinetto/turcheseinfuoco.png";
import stellafiorita from "../images/uncinetto/stellafiorita.webp";
import trioflorealerosa from "../images/uncinetto/trioflorealerosa.webp";
import trioflorealeturchese from "../images/uncinetto/trioflorealeturchese.webp";
import cristallibluverdefloreali from "../images/uncinetto/cristallibluverdefloreali.webp";
import lillanottenera from "../images/uncinetto/lillanottenera.webp";
import cristallicelestedazzurro from "../images/uncinetto/cristallicelestedazzurro.webp";
import sfumaturedibosco from "../images/uncinetto/sfumaturedibosco.webp";
import verdedimezzanotte from "../images/uncinetto/verdedimezzanotte.webp";
import margheritadeicampi from "../images/uncinetto/margheritadeicampi.webp";
import margheritadibosco from "../images/uncinetto/margheritadibosco.webp";
import cristalliditramonto from "../images/uncinetto/cristalliditramonto.webp";
import rosaautunnale from "../images/uncinetto/rosaautunnale.webp";
import fogliedicristalli from "../images/uncinetto/fogliedicristalli.webp";
import orecchiniblunotte from "../images/uncinetto/orecchiniblunotte.webp";
import ciondoloblunotte from "../images/uncinetto/ciondoloblunotte.webp";
import orecchinicristallidisabbia from "../images/uncinetto/orecchinicristallidisabbia.webp";


import orecchiniFioreCascata from "../images/chiacchierino/orecchiniFioreCascata.jpeg";

const COMMON = 0;
const SPECIAL = 1;
const LAST = 2;

const menuElement = [
  {
    id: 0,
    section: "Home",
    path: "/",
    icon: <HomeIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 1,
    section: "Chiacchierino",
    path: "chiacchierino/",
    icon: <CollectionsIcon />,
  },
  {
    id: 2,
    section: "Uncinetto",
    path: "uncinetto/",
    icon: <CollectionsIcon />,
  },
  // {
  //   id: 3,
  //   section: "Amigrumi",0
  //   path: "amigrumi/",
  //   icon: <CollectionsIcon />,
  // },
];

const elements = [
  {
    id: uuidv4(),
    title: "Esplosione di colori",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:esplosionedicolori,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Riflessi di natura",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:riflessidinatura,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: " Ciondolo riflessi di natura",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:ciondoloriflessidinatura,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Turchese in fuoco",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:turcheseinfuoco,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Stella fiorita",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:stellafiorita,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Trio floreale rosa",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:trioflorealerosa,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Trio floreale turchese",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:trioflorealeturchese,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Cristalli blu-verde floreali",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:cristallibluverdefloreali,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Lilla notte nera",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:lillanottenera,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Cristalli celeste d'azzurro",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:cristallicelestedazzurro,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Sfumature di bosco",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:sfumaturedibosco,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Verde di mezzanotte",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:verdedimezzanotte,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Margerita dei campi",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:margheritadeicampi,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Margerita di bosco",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:margheritadibosco,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Cristalli di tramonto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:cristalliditramonto,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Rosa autunnale",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:rosaautunnale,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Foglie di cristalli",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:fogliedicristalli,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini blu notte",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:orecchiniblunotte,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Ciondolo blu notte",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:ciondoloblunotte,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini cristalli di sabbia",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:orecchinicristallidisabbia,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Ciondolo cristalli di sabbia",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto17,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini perle di luce",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto18,
    category: "Uncinetto",
  },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto19,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto20,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto21,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto22,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto23,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto24,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto25,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto26,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto27,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto28,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto29,
  //   category: "Uncinetto",
  // },
  // {
  //   id: uuidv4(),
  //   title: "Orecchini uncinetto",
  //   type: COMMON,
  //   desc: "Orecchini ricamati a forma di stella.",
  //   image:uncinetto30,
  //   category: "Uncinetto",
  // },
  {
    id: uuidv4(),
    title: "Orecchini chiaccheirino",
    type: LAST,
    desc: "Orecchini ricamati a forma di stella.",
    image:orecchiniFioreCascata,
    category: "Chiacchierino",
  },
 ];

const axiosToData = async (axiosPromise) => {
  try {
    const results = await axiosPromise;
    return results.data.data;
  } catch (error) {
    throw error;
  }
};

export {
  menuElement,
  axiosToData,
  elements,
};
