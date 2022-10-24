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
    title: "Angelo portafortuna Oro",
    desc: "Ciondolo portafortuna a forma di Angelo ricamato in color Oro, impreziosito con una perla.",
    img: <Image src={angeloFortunaOro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloFortunaOro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloFortunaOro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Angelo portafortuna Argento",
    desc: "Ciondolo portafortuna a forma di Angelo ricamato in color Argento, impreziosito con una perla.",
    img: <Image src={angeloFortunaArgento} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloFortunaArgento} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloFortunaArgento} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Ciondolo",
  },
  {
    id: uuidv4(),
    title: "Completo in Oro con rosa",
    desc: "Completo in color oro metallizzato, impreziosito con rose in resina.",
    img: <Image src={completoOroRosa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={completoOroRosa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={completoOroRosa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Completo Bianco",
    desc: "Completo ricamato in colore bianco, impreziosito da perle.",
    img: <Image src={completoVentaglioBianco} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={completoVentaglioBianco} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={completoVentaglioBianco} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Completo Rosso",
    desc: "Completo ricamato in colore rosso, impreziosito da perle.",
    img: <Image src={completoVentaglioRosso} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={completoVentaglioRosso} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={completoVentaglioRosso} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Completo Nero",
    desc: "Completo ricamato in colore nero, impreziosito da perle.",
    img: <Image src={completoVentaglioNero} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={completoVentaglioNero} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={completoVentaglioNero} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Completo",
  },
  {
    id: uuidv4(),
    title: "Bracciale alla schiava Oro e Verde",
    desc: "Bracciale alla schiava ricamato in oro metallizzato e impreziosito da cristalli in sfumature di verde. Il bracciale è dotato di chiusura magnetica",
    img: <Image src={braccialeOroVerde} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={braccialeOroVerde} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={braccialeOroVerde} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Bracciale",
  },
  {
    id: uuidv4(),
    title: "Bracciale alla schiava Argento e Rosa",
    desc: "Bracciale alla schiava ricamato in argento metallizzato e impreziosito da cristalli in sfumature di rosa. Il bracciale è dotato di chiusura magnetica",
    img: <Image src={braccialeArgentoRosa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={braccialeArgentoRosa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={braccialeArgentoRosa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Bracciale",
  },
  {
    id: uuidv4(),
    title: "Orecchini farfalla in Oro con rosa",
    desc: "Orecchini a forma di farfalla, ricamati in colore oro metallizzato e impreziositi con una rosa in resina.",
    img: <Image src={farfallaOroRosa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={farfallaOroRosa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={farfallaOroRosa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod.1",
    desc: "Orecchini ricamati a forma di fiocco di Neve in colore bianco",
    img: <Image src={fioccoFioreRotondo} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoFioreRotondo} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoFioreRotondo} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod.2",
    desc: "Orecchini ricamati a forma di fiocco di Neve in colore bianco",
    img: <Image src={fioccoNeveFiorellino} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveFiorellino} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveFiorellino} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod.3",
    desc: "Orecchini ricamati a forma di fiocco di Neve in colore bianco",
    img: <Image src={fioccoNeveOrecchini} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveOrecchini} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveOrecchini} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Ciondolo fiocco di Neve mod.3",
    desc: "Ciondolo ricamato a forma di fiocco di Neve in colore bianco",
    img: <Image src={fioccoNeveCiondolo} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveCiondolo} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveCiondolo} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Medaglione",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod.4",
    desc: "Orecchini ricamati a forma di fiocco di Neve in colore bianco",
    img: <Image src={fioccoNeveRotondoGrande} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveRotondoGrande} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveRotondoGrande} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve mod.5",
    desc: "Orecchini ricamati a forma di fiocco di Neve in colore bianco",
    img: <Image src={fioccoNeveStella} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveStella} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveStella} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Orecchini",
  },
]

const uncinettoElements = [
  {
    id: uuidv4(),
    title: "Rombo Blu e Senape",
    desc: "Orecchini fatti con la tecnica dell'uncinetto, colore blue e senape a forma di rombo. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={rombiBlueSenape} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={rombiBlueSenape} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={rombiBlueSenape} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Rombo Oro e Blu",
    desc: "Orecchini fatti con la tecnica dell'uncinetto, colore oro e blu a forma di rombo. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={rombiOroeBlu} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={rombiOroeBlu} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={rombiOroeBlu} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cerchio con fiore in Verde",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli verdi ricamati, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={cerchioFioreVerde} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cerchioFioreVerde} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cerchioFioreVerde} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cerchio con fiore in Arancione",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli arancioni ricamati, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={cerchioFioreArancione} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cerchioFioreArancione} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cerchioFioreArancione} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cerchio con fiore in Blu",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli blu ricamati, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={cerchioFioreBlu} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cerchioFioreBlu} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cerchioFioreBlu} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cerchio Marrone con rosa in Avorio",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli rosa e marroni ricamati e una rosa in colore avorio, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={cerchiRosaAvorio} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cerchiRosaAvorio} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cerchiRosaAvorio} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Medaglione Marrone con rosa in Avorio",
    desc: "Medaglione fatto con la tecnica dell'uncinetto con cristalli rosa e marroni ricamati e una rosa in colore avorio, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={medaglioneRosaAvorio} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={medaglioneRosaAvorio} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={medaglioneRosaAvorio} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Medaglione",
  },
  {
    id: uuidv4(),
    title: "Medaglione a fiore in Oro",
    desc: "Medaglione fatto con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={medaglioneFioreOro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={medaglioneFioreOro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={medaglioneFioreOro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Medaglione",
  },
  {
    id: uuidv4(),
    title: "Fiore in Oro",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={fioreOro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioreOro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioreOro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco in Argento con cristalli",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={fioccoArgentoVerde} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoArgentoVerde} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoArgentoVerde} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Medaglione a fiocco in Argento con cristalli",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={medaglioneFioccoArgentoVerde} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={medaglioneFioccoArgentoVerde} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={medaglioneFioccoArgentoVerde} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve in Argento con cristalli Bianchi",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={fioccoNeveArgentoBianco} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveArgentoBianco} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveArgentoBianco} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve in Oro con cristalli Bianchi",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={fioccoNeveOroBianco} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveOroBianco} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveOroBianco} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Fiocco di Neve in Argento con cristalli Neri",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={fioccoNeveArgentoNero} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={fioccoNeveArgentoNero} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={fioccoNeveArgentoNero} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella in Oro con cristalli Blu",
    desc: "Orecchini fatti con la tecnica dell'uncinetto con cristalli e perle ricamate, colore oro. La lunghezza complessiva è di circa 8 cm.",
    img: <Image src={stellaOroBlu} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaOroBlu} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaOroBlu} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Uncinetto",
    cat: "Orecchini",
  },
];

const otherElements = [
  {
    id: uuidv4(),
    title: "Angelo Grigio Chiaro",
    desc: "Orecchini in perla colore grigio chiaro a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloGrigioChiaro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloGrigioChiaro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloGrigioChiaro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo Lilla",
    desc: "Orecchini in perla colore lilla a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloLilla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloLilla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloLilla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo Lilla Chiaro",
    desc: "Orecchini in perla colore lilla chiaro a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloLillaChiaro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloLillaChiaro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloLillaChiaro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo Marrone",
    desc: "Orecchini in perla colore marrone a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloMarrone} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloMarrone} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloMarrone} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo Marrone Chiaro",
    desc: "Orecchini in perla colore marrone chiaro a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloMarrChiaro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloMarrChiaro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloMarrChiaro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo Rosa Antico",
    desc: "Orecchini in perla colore rosa antico a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloRosaAntico} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloRosaAntico} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloRosaAntico} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo Turchese",
    desc: "Orecchini in perla colore turchese a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeloTurchese} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeloTurchese} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeloTurchese} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Arancione",
    desc: "Orecchini in cristalli di colore arancione a forma di Babbo Natale . La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={babbonataleArancione} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={babbonataleArancione} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={babbonataleArancione} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Azzurro",
    desc: "Orecchini in cristalli di colore azzurro a forma di Babbo Natale . La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={babbonataleAzzurro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={babbonataleAzzurro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={babbonataleAzzurro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Rosso",
    desc: "Orecchini in cristalli di colore rosso a forma di Babbo Natale . La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={babbonataleRosso} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={babbonataleRosso} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={babbonataleRosso} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Verde",
    desc: "Orecchini in cristalli di colore verde a forma di Babbo Natale . La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={babbonataleVerde} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={babbonataleVerde} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={babbonataleVerde} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Pupazzo di neve Blu",
    desc: "Orecchini in perla con distanziatori di colore blu a forma di pupazzo di neve. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={pupazzoNeveBlu} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pupazzoNeveBlu} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pupazzoNeveBlu} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Pupazzo di neve Rosso",
    desc: "Orecchini in perla con distanziatori di colore rosso a forma di pupazzo di neve. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={pupazzoNeveRosso} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pupazzoNeveRosso} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pupazzoNeveRosso} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Pupazzo di neve Verde",
    desc: "Orecchini in perla con distanziatori di colore verde a forma di pupazzo di neve. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={pupazzoNeveVerde} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pupazzoNeveVerde} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pupazzoNeveVerde} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Pietra bianca",
    desc: "Orecchini in pietra bianca. La lunghezza complessiva è di circa 5 cm.",
    img: <Image src={pietreBianco} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pietreBianco} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pietreBianco} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Zebrati neri",
    desc: "Orecchini in pietra zebrata con colore nero e giallo. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={pietreGialleNere} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pietreGialleNere} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pietreGialleNere} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Apette",
    desc: "Orecchini in resina con colore nero e giallo. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={pietreGialloChiaro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pietreGialloChiaro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pietreGialloChiaro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Goccia rossa",
    desc: "Orecchini in pietra rossa. La lunghezza complessiva è di circa 5 cm.",
    img: <Image src={pietreRosse} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pietreRosse} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pietreRosse} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cristallo lilla",
    desc: "Orecchini in cristallo lilla. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={cristalliLilla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cristalliLilla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cristalliLilla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo rosa",
    desc: "Orecchini in cristallo rosa. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={cristalliRosa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cristalliRosa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cristalliRosa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo rosso",
    desc: "Orecchini in cristallo rosso. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={cristalliRossi} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={cristalliRossi} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={cristalliRossi} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cristallo arancione",
    desc: "Orecchini in cristallo arancione con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={pallaArancione} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pallaArancione} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pallaArancione} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cristallo blu",
    desc: "Orecchini in cristallo blu con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={pallaBlu} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pallaBlu} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pallaBlu} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cristallo celeste",
    desc: "Orecchini in cristallo celeste con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={pallaCeleste} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pallaCeleste} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pallaCeleste} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Cristallo giallo",
    desc: "Orecchini in cristallo giallo con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={pallaGialla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={pallaGialla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={pallaGialla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella gialla",
    desc: "Orecchini in cristallo giallo a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaGialla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaGialla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaGialla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella lime",
    desc: "Orecchini in cristallo lime a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaLime} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaLime} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaLime} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella arancione",
    desc: "Orecchini in cristallo arancione a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaArancione} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaArancione} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaArancione} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella celeste",
    desc: "Orecchini in cristallo celeste a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaCeleste} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaCeleste} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaCeleste} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella lilla",
    desc: "Orecchini in cristallo lilla a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaLilla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaLilla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaLilla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella rosa",
    desc: "Orecchini in cristallo rosa a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaRosa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaRosa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaRosa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella rossa",
    desc: "Orecchini in cristallo rosso a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaRossa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaRossa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaRossa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Stella viola",
    desc: "Orecchini in cristallo viola a forma di stella con pendente a goccia. La lunghezza complessiva è di circa 4 cm.",
    img: <Image src={stellaViola} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={stellaViola} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={stellaViola} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto arancione",
    desc: "Orecchini in perla con pendente in resina arancione a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliArancione} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliArancione} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliArancione} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto bianco",
    desc: "Orecchini in perla con pendente in resina bianco a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliBianco} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliBianco} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliBianco} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto bianco e lilla",
    desc: "Orecchini in perla con pendente in resina bianco e lilla a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliBiancoLilla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliBiancoLilla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliBiancoLilla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto blu",
    desc: "Orecchini in perla con pendente in resina blu a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliBlu} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliBlu} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliBlu} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto celeste",
    desc: "Orecchini in perla con pendente in resina celeste a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliCeleste} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliCeleste} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliCeleste} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto giallo",
    desc: "Orecchini in perla con pendente in resina giallo a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliGiallo} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliGiallo} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliGiallo} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto lilla",
    desc: "Orecchini in perla con pendente in resina lilla a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliLilla} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliLilla} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliLilla} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto rosa",
    desc: "Orecchini in perla con pendente in resina rosa a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliRosa} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliRosa} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliRosa} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto rosa chiaro",
    desc: "Orecchini in perla con pendente in resina rosa chiaro a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliRosaChiaro} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliRosaChiaro} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliRosaChiaro} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angioletto rosso",
    desc: "Orecchini in perla con pendente in resina rosso a forma di angelo. La lunghezza complessiva è di circa 2 cm.",
    img: <Image src={angeliRosso} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliRosso} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliRosso} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Angelo in cristallo Rosso",
    desc: "Orecchini in cristallo rosso  a forma di angelo. La lunghezza complessiva è di circa 3 cm.",
    img: <Image src={angeliRossoTr} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={angeliRossoTr} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={angeliRossoTr} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Bigiotteria",
    cat: "Orecchini",
  },
  {
    id: uuidv4(),
    title: "Braccialetti con charm",
    desc: "Braccialetti con charm . La lunghezza complessiva è di circa 13 cm.",
    img: <Image src={tricotin} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={tricotin} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={tricotin} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Tricotin",
    cat: "Bracciali",
  },
  {
    id: uuidv4(),
    title: "Braccialetti con charm",
    desc: "Braccialetti con charm . La lunghezza complessiva è di circa 13 cm.",
    img: <Image src={tricotin2} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={tricotin2} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={tricotin2} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Tricotin",
    cat: "Bracciali",
  },
  {
    id: uuidv4(),
    title: "Braccialetti con charm",
    desc: "Braccialetti con charm . La lunghezza complessiva è di circa 13 cm.",
    img: <Image src={tricotin3} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={tricotin3} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={tricotin3} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Tricotin",
    cat: "Bracciali",
  },
];

const necklaceElements = [
  {
    id: uuidv4(),
    title: "Collana in oro con pietre rosse",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore rosso.",
    img: <Image src={collana01} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana01} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana01} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana in oro con pietre nere e gialle",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore nero e giallo.",
    img: <Image src={collana02} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana02} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana02} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    link: "https://www.subito.it/abbigliamento-accessori/collana-in-chiacchierino-con-perle-in-ceramica-campobasso-459925750.htm",
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana con pietre arancioni",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato arancione e pietre di colore arancione.",
    img: <Image src={collana03} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana03} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana03} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana in oro con pietre blu",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore blu.",
    img: <Image src={collana04} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana04} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana04} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana in oro con pietre rosa e perle bianche",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato, pietre rosa e perle bianche.",
    img: <Image src={collana05} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana05} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana05} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana in oro con pietre marroni",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore marrone.",
    img: <Image src={collana06} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana06} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana06} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana in argento con pietre colorate",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato argento metallizzato e pietre di colore vario.",
    img: <Image src={collana07} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana07} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana07} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana in blu notte con pietre blu",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato blu notte e pietre di colore blu.",
    img: <Image src={collana08} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana08} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana08} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana09} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana09} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana09} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana10} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana10} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana10} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana11} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana11} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana11} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana12} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana12} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana12} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana13} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana13} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana13} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    link: "https://www.misshobby.com/it/oggetti/collana-in-chiacchierino-con-perle-di-ceramica-multicolor",
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana14} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana14} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana14} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana15} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana15} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana15} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana16} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana16} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana16} placeholder="blur" />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana17} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana17} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana17} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana18} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana18} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana18} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana19} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana19} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana19} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana20} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana20} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana20} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana21} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana21} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana21} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    title: "Collana AllBlack",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana22} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana22} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana22} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
    category: "Chiacchierino",
    cat: "Collane",

  },
  {
    id: uuidv4(),
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana23} width="300" height="250" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 250))}`} />,
    imG: <Image src={collana23} width="450" height="300" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(450, 300))}`} />,
    imZ: <Image src={collana23} placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(900, 675))}`} />,
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
