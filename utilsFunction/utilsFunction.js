import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";
import collana01 from "../images/Collana001.jpg";
import collana02 from "../images/Collana002.jpg";
import collana03 from "../images/Collana003.jpg";
import collana04 from "../images/Collana004.jpg";
import collana05 from "../images/Collana005.jpg";
import collana06 from "../images/Collana006.jpg";
import collana07 from "../images/Collana007.jpg";
import collana08 from "../images/Collana008.jpg";
import collana09 from "../images/Collana009.jpg";
import collana10 from "../images/Collana010.jpg";
import collana11 from "../images/Collana011.jpg";
import collana12 from "../images/Collana012.jpg";
import collana13 from "../images/Collana013.jpg";
import collana14 from "../images/Collana014.jpg";
import collana15 from "../images/Collana015.jpg";
import collana16 from "../images/Collana016.jpg";
import collana17 from "../images/Collana017.jpg";
import collana18 from "../images/Collana018.jpg";
import collana19 from "../images/Collana019.jpg";
import collana20 from "../images/Collana020.jpg";
import collana21 from "../images/Collana021.jpg";
import collana22 from "../images/Collana022.jpg";
import collana23 from "../images/Collana023.jpg";

import angeloGrigioChiaro from "../images/other/angeloGrigioChiaro.jpeg";
import angeloLilla from "../images/other/angeloLilla.jpeg";
import angeloLillaChiaro from "../images/other/angeloLillaChiaro.jpeg";
import angeloMarrone from "../images/other/angeloMarrone.jpeg";
import angeloRosaAntico from "../images/other/angeloRosaAntico.jpeg";
import angeloTurchese from "../images/other/angeloTurchese.jpeg";
import angeloMarrChiaro from "../images/other/angeloMarrChiaro.jpeg";
import babbonataleArancione from "../images/other/babbonataleArancione.jpeg";
import babbonataleAzzurro from "../images/other/babbonataleAzzurro.jpeg";
import babbonataleRosso from "../images/other/babbonataleRosso.jpeg";
import babbonataleVerde from "../images/other/babbonataleVerde.jpeg";
import pupazzoNeveBlu from "../images/other/pupazzoNeveBlu.jpeg";
import pupazzoNeveRosso from "../images/other/pupazzoNeveRosso.jpeg";
import pupazzoNeveVerde from "../images/other/pupazzoNeveVerde.jpeg";
import pietreBianco from "../images/other/pietreBianco.jpeg";
import pietreGialleNere from "../images/other/pietreGialleNere.jpeg";
import pietreGialloChiaro from "../images/other/pietreGialloChiaro.jpeg";
import pietreRosse from "../images/other/pietreRosse.jpeg";
import cristalliLilla from "../images/other/cristalliLilla.jpeg";
import cristalliRosa from "../images/other/cristalliRosa.jpeg";
import cristalliRossi from "../images/other/cristalliRossi.jpeg";
import pallaArancione from "../images/other/pallaArancione.jpeg";
import pallaBlu from "../images/other/pallaBlu.jpeg";
import pallaCeleste from "../images/other/pallaCeleste.jpeg";
import pallaGialla from "../images/other/pallaGialla.jpeg";
import stellaGialla from "../images/other/stellaGialla.jpeg";
import stellaLime from "../images/other/stellaLime.jpeg";
import stellaArancione from "../images/other/stelleArancione.jpeg";
import stellaCeleste from "../images/other/stelleCeleste.jpeg";
import stellaLilla from "../images/other/stelleLilla.jpeg";
import stellaRosa from "../images/other/stelleRosa.jpeg";
import stellaRossa from "../images/other/stelleRossa.jpeg";
import stellaViola from "../images/other/stelleViola.jpeg";
import angeliArancione from "../images/other/angeliArancione.jpeg";
import angeliBianco from "../images/other/angeliBianco.jpeg";
import angeliBiancoLilla from "../images/other/angeliBiancoLilla.jpeg";
import angeliBlu from "../images/other/angeliBlu.jpeg";
import angeliCeleste from "../images/other/angeliCeleste.jpeg";
import angeliGiallo from "../images/other/angeliGiallo.jpeg";
import angeliLilla from "../images/other/angeliLilla.jpeg";
import angeliRosa from "../images/other/angeliRosa.jpeg";
import angeliRosaChiaro from "../images/other/angeliRosaChiaro.jpeg";
import angeliRosso from "../images/other/angeliRosso.jpeg";
import angeliRossoTr from "../images/other/angeliRossoTr.jpeg";
import tricotin from "../images/other/tricotin.png";
import tricotin2 from "../images/other/tricotin2.png";
import tricotin3 from "../images/other/tricotin3.png";

import rombiBlueSenape from "../images/uncinetto/rombiBlueSenape.jpg";
import rombiOroeBlu from "../images/uncinetto/rombiOroeBlu.jpg";
import cerchioFioreVerde from "../images/uncinetto/cerchioFioreVerde.jpg";
import cerchioFioreArancione from "../images/uncinetto/cerchioFioreArancione.jpg";
import cerchioFioreBlu from "../images/uncinetto/cerchioFioreBlu.jpg";
import cerchiRosaAvorio from "../images/uncinetto/cerchiRosaAvorio.jpg";
import medaglioneRosaAvorio from "../images/uncinetto/medaglioneRosaAvorio.jpg";
import medaglioneFioreOro from "../images/uncinetto/medaglioneFioreOro.jpg";
import fioreOro from "../images/uncinetto/fioreOro.jpg";
import fioccoArgentoVerde from "../images/uncinetto/fioccoArgentoVerde.jpg";
import fioccoNeveArgentoBianco from "../images/uncinetto/fioccoNeveArgentoBianco.jpg";
import fioccoNeveOroBianco from "../images/uncinetto/fioccoNeveOroBianco.jpg";
import fioccoNeveArgentoNero from "../images/uncinetto/fioccoNeveArgentoNero.jpg";
import stellaOroBlu from "../images/uncinetto/stellaOroBlu.jpg";
import medaglioneFioccoArgentoVerde from "../images/uncinetto/medaglioneFioccoArgentoVerde.jpg";

import angeloFortunaOro from "../images/chiacchierino/angeloFortunaOro.jpeg";
import angeloFortunaArgento from "../images/chiacchierino/angeloFortunaArgento.jpeg";
import completoOroRosa from "../images/chiacchierino/completoOroRosa.jpg";
import completoVentaglioBianco from "../images/chiacchierino/completoVentaglioBianco.jpg";
import completoVentaglioRosso from "../images/chiacchierino/completoVentaglioRosso.jpg";
import completoVentaglioNero from "../images/chiacchierino/completoVentaglioNero.jpg";
import braccialeOroVerde from "../images/chiacchierino/braccialeOroVerde.jpg";
import braccialeArgentoRosa from "../images/chiacchierino/braccialeArgentoRosa.jpg";
import farfallaOroRosa from "../images/chiacchierino/farfallaOroRosa.jpg";
import fioccoFioreRotondo from "../images/chiacchierino/fioccoFioreRotondo.jpeg";
import fioccoNeveFiorellino from "../images/chiacchierino/fioccoNeveFiorellino.jpeg";
import fioccoNeveOrecchini from "../images/chiacchierino/fioccoNeveOrecchini.jpeg";
import fioccoNeveRotondoGrande from "../images/chiacchierino/fioccoNeveRotondoGrande.jpeg";
import fioccoNeveStella from "../images/chiacchierino/fioccoNeveStella.jpeg";
import fioccoNeveCiondolo from "../images/chiacchierino/fioccoNeveCiondolo.jpeg";



const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F4A2B8" offset="20%" />
      <stop stop-color="#E55B83" offset="50%" />
      <stop stop-color="#c9184a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#fff" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);


const menuElement = [
  {
    id: "0",
    section: "Home",
    path: "/",
    icon: <HomeIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: "1",
    section: "Chiacchierino",
    path: "chiacchierino/",
    icon: <CollectionsIcon />,
  },
  {
    id: "2",
    section: "Uncinetto",
    path: "uncinetto/",
    icon: <CollectionsIcon />,
  },
  {
    id: "3",
    section: "Altro",
    path: "other/",
    icon: <CollectionsIcon />,
  },
  {
    id: "4",
    section: "Contattaci",
    path: "contactUs/",
    icon: <MailIcon />,
  },
];

const chiacchierinoElements = [
  {
    id: uuidv4(),
    title: "Angelo portafortuna",
    desc: "Ciondolo portafortuna a forma di Angelo, impreziosito con una perla.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: angeloFortunaOro,
    }, {
      name: "Argento",
      color: "#c0c0c0",
      imG: angeloFortunaArgento,
    }
    ],
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Completo ventaglio",
    desc: "Completo composto da bracciale e orecchini, ricamati a forma di ventaglio.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: completoVentaglioBianco,
    }, {
      name: "Nero",
      color: "#000",
      imG: completoVentaglioNero,
    }, {
      name: "Rosso",
      color: "#f00",
      imG: completoVentaglioRosso,
    }
    ],
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Bracciale alla schiava",
    desc: "Bracciale alla schiava impreziosito da cristalli.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: braccialeOroVerde,
    }],
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Bracciale alla schiava",
    desc: "Bracciale alla schiava impreziosito da cristalli.",
    images: [{
      name: "Argento",
      color: "#c0c0c0",
      imG: braccialeArgentoRosa,
    }],
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Completo con Rosa",
    desc: "Completo di orecchini e bracciale impreziositi con una rosa in resina.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: completoOroRosa,
    }],
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Farfalla con rosa.",
    desc: "Orecchini ricamati a forma di farfalla, impreziositi con una rosa in resina.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: farfallaOroRosa,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod 1.",
    desc: "Orecchini ricamati a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoFioreRotondo,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod 2.",
    desc: "Orecchini ricamati a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoNeveFiorellino,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod 3.",
    desc: "Orecchini ricamati a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoNeveRotondoGrande,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod 4.",
    desc: "Orecchini ricamati a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoNeveOrecchini,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Ciondolo fiocco di Neve mod 4.",
    desc: "Ciondolo ricamato a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoNeveCiondolo,
    }],
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
];

const uncinettoElements = [
  {
    id: uuidv4(),
    title: "Cerchio con fiore",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli verdi ricamati, colore oro. La lunghezza complessiva è di circa 8 cm.",
    images: [{
      name: "Verde",
      color: "#0f0",
      imG: cerchioFioreVerde,
    },
    {
      name: "Arancione",
      color: "#ffa500",
      imG: cerchioFioreArancione,
    },
    {
      name: "Blu",
      color: "#00f",
      imG: cerchioFioreBlu,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },

];

const otherElements = [
  {
    id: uuidv4(),
    title: "Angioletto ",
    desc: "Orecchini in perla con pendente in resina a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    images: [{
      name: "Rosa",
      color: "#ffc0cb",
      imG: angeliRosa,
    },
    {
      name: " Rosa Chiaro",
      color: "#fadadd",
      imG: angeliRosaChiaro,
    }, {
      name: "Rosso",
      color: "#f00",
      imG: angeliRosso,
    }],
    category: "Bigiotteria",
    cat: "Orecchini",
  },

];

const necklaceElements = [
  {
    id: uuidv4(),
    title: "Collana in oro con pietre rosse",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore rosso.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: collana01,
    }],
    category: "Chiacchierino",
    cat: "Collane",
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

export { menuElement, necklaceElements, axiosToData, otherElements, uncinettoElements, chiacchierinoElements };
