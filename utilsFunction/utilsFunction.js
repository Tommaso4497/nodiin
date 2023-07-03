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
import uncinetto9 from "../images/uncinetto/uncinetto9.webp";
import uncinetto10 from "../images/uncinetto/uncinetto10.webp";
import uncinetto11 from "../images/uncinetto/uncinetto11.webp";
import uncinetto12 from "../images/uncinetto/uncinetto12.webp";
import uncinetto13 from "../images/uncinetto/uncinetto13.webp";
import uncinetto14 from "../images/uncinetto/uncinetto14.webp";
import uncinetto15 from "../images/uncinetto/uncinetto15.webp";
import uncinetto16 from "../images/uncinetto/uncinetto16.webp";
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
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto9,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto10,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto11,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto12,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto13,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto14,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto15,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto16,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto17,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto18,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto19,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto20,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto21,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto22,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto23,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto24,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto25,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto26,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto27,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto28,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto29,
    category: "Uncinetto",
  },
  {
    id: uuidv4(),
    title: "Orecchini uncinetto",
    type: COMMON,
    desc: "Orecchini ricamati a forma di stella.",
    image:uncinetto30,
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
