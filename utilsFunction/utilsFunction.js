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


import uncinetto1 from "../images/uncinetto/uncinetto1.webp";
import uncinetto2 from "../images/uncinetto/uncinetto2.webp";
import uncinetto3 from "../images/uncinetto/uncinetto3.webp";
import uncinetto4 from "../images/uncinetto/uncinetto4.webp";
import uncinetto5 from "../images/uncinetto/uncinetto5.webp";
import uncinetto6 from "../images/uncinetto/uncinetto6.webp";
import uncinetto7 from "../images/uncinetto/uncinetto7.webp";
import uncinetto8 from "../images/uncinetto/uncinetto8.webp";


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
  //   section: "Amigrumi",
  //   path: "amigrumi/",
  //   icon: <CollectionsIcon />,
  // },
];

const elements = [
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto1,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto2,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto3,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto4,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto5,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto6,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto7,
    category: "Uncinetto",

  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto8,
    category: "Uncinetto",
  },
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
