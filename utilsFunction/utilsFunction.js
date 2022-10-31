import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import { v4 as uuidv4 } from 'uuid';
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
import completoBN from "../images/uncinetto/completoBN.jpg";
import agrifoglio from "../images/uncinetto/agrifoglio.jpg";


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
import ondulinaRossa from "../images/chiacchierino/ondulinaRossa.jpg";
import ondulinaNero from "../images/chiacchierino/ondulinaNero.jpg";
import ondulinaLilla from "../images/chiacchierino/ondulinaLilla.jpg";
import completoFiorellinoBianco from "../images/chiacchierino/completoFiorellinoBianco.jpg";
import ricamoRosa from "../images/chiacchierino/ricamoRosa.jpg";
import completoCampaneNero from "../images/chiacchierino/completoCampaneNero.jpg";
import completoCampaneRosso from "../images/chiacchierino/completoCampaneRosso.jpg";

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
    cat: "Bracciale",
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
    cat: "Bracciale",
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
      imG: fioccoNeveStella,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod 5.",
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
    title: "Ciondolo fiocco di Neve mod 5.",
    desc: "Ciondolo ricamato a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoNeveCiondolo,
    }],
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Completo Fiorellini",
    desc: "Completo ricamato a forma di fiorellini ed edera.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: completoFiorellinoBianco,
    }],
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Ricamo con Rosa",
    desc: "Orecchini ricamati e impreziositi con una rosa.",
    images: [{
      name: "Nero",
      color: "#000",
      imG: ricamoRosa,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Ondulina",
    desc: "Bracciale ricamato a forma di ondulina impreziosito con perle.",
    images: [{
      name: "Rosa",
      color: "#ffc0cb",
      imG: ondulinaRossa,
    },{
      name: "Nero",
      color: "#000",
      imG: ondulinaNero,
    },
    {
      name: "Lilla",
      color: "#ff00ff",
      imG: ondulinaLilla,
    }],
    category: "Chiacchierino",
    cat: "Bracciale",
  },
  {
    id: uuidv4(),
    title: "Completo campane",
    desc: "Completo con orecchini e collane ricamati a forma di campana.",
    images: [{
      name: "Rosso",
      color: "#f00",
      imG: completoCampaneRosso,
    },{
      name: "Nero",
      color: "#000",
      imG: completoCampaneNero,
    }],
    category: "Chiacchierino",
    cat: "Completo",
  },
];

const uncinettoElements = [
  {
    id: uuidv4(),
    title: "Cerchio con fiore",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli ricamati. La lunghezza complessiva è di circa 8 cm.",
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
  {
    id: uuidv4(),
    title: "Fiocco di Neve",
    desc: "Orecchini ricamati a forma di Fiocco di Neve impreziositi con cristalli.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: fioccoNeveOroBianco,
    },
    {
      name: "Argento",
      color: "#c0c0c0",
      imG: fioccoNeveArgentoBianco,
    },
    {
      name: "Nero",
      color: "#000",
      imG: fioccoNeveArgentoNero,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Sole con nappine",
    desc: "Orecchini ricamati a forma di Sole impreziositi con cristalli e nappine colorate.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: stellaOroBlu,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiore con perle",
    desc: "Orecchini ricamati a forma di Fiore e impreziositi con cristalli e perle.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: fioreOro,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Ciondolo Fiore con perle",
    desc: "Ciodnolo ricamato a forma di Fiore e impreziosito con cristalli e perle.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: medaglioneFioreOro,
    }],
    category: "Uncinetto",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Mandala con rosa",
    desc: "Orecchini ricamati a forma di mandala e impreziositi con cristalli e rose.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: cerchiRosaAvorio,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Ciondolo Mandala con rosa",
    desc: "Ciondolo ricamato a forma di Mandala e impreziosito con cristalli e rose.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: medaglioneRosaAvorio,
    }],
    category: "Uncinetto",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Fiore con cristalli",
    desc: "Orecchini ricamati a forma di fiore e impreziositi con cristalli.",
    images: [{
      name: "Argento",
      color: "#c0c0c0",
      imG: fioccoArgentoVerde,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Ciondolo Fiore con cristalli",
    desc: "Ciondolo ricamato a forma di fiore e impreziosito con cristalli.",
    images: [{
      name: "Argento",
      color: "#c0c0c0",
      imG: medaglioneFioccoArgentoVerde,
    }],
    category: "Uncinetto",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Rombo con Fiore",
    desc: "Orecchini ricamati a forma di rombo.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: rombiOroeBlu,
    }, {
      name: "Blu",
      color: "#00f",
      imG: rombiBlueSenape,
    }],
    category: "Uncinetto",
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

const christmas = [
  {
    id: uuidv4(),
    title: "Angelo portafortuna",
    desc: "Ciondolo portafortuna a forma di Angelo, impreziosito con una perla.",
    images: [ {
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
    title: "Fiocco di Neve",
    desc: "Orecchini ricamati a forma di Fiocco di Neve impreziositi con cristalli.",
    images: [{
      name: "Oro",
      color: "#ffd100",
      imG: fioccoNeveOroBianco,
    },
    {
      name: "Argento",
      color: "#c0c0c0",
      imG: fioccoNeveArgentoBianco,
    },
    {
      name: "Nero",
      color: "#000",
      imG: fioccoNeveArgentoNero,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Agrifoglio",
    desc: "Orecchini ricamati a forma di agrifoglio.",
    images: [{
      name: "Verde",
      color: "#0f0",
      imG: agrifoglio,
    }],
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod 4.",
    desc: "Orecchini ricamati a forma di fiocco di neve.",
    images: [{
      name: "Bianco",
      color: "#fff",
      imG: fioccoNeveStella,
    }],
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Completo Babbo Natale",
    desc: "Completo a forma di Babbo Natale, orecchini e bracciale.",
    images: [{
      name: "rOSSO",
      color: "#f00",
      imG: completoBN,
    }],
    category: "Uncientto",
    cat: "Completo",
  },
 ];

 const lastCreations = [{

 }

 ];

const axiosToData = async (axiosPromise) => {
  try {
    const results = await axiosPromise;
    return results.data.data;
  } catch (error) {
    throw error;
  }
};

export { menuElement, necklaceElements, axiosToData, uncinettoElements, chiacchierinoElements, christmas,lastCreations };
