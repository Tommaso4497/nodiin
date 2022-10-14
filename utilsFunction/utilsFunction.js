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

import angeloGrigioChiaro from "../images/other/angeloGrigioChiaro.jpeg"
import angeloLilla from "../images/other/angeloLilla.jpeg"
import angeloLillaChiaro from "../images/other/angeloLillaChiaro.jpeg"
import angeloMarrone from "../images/other/angeloMarrone.jpeg"
import angeloRosaAntico from "../images/other/angeloRosaAntico.jpeg"
import angeloTurchese from "../images/other/angeloTurchese.jpeg"
import angeloMarrChiaro from "../images/other/angeloMarrChiaro.jpeg"
import babbonataleArancione from "../images/other/babbonataleArancione.jpeg"
import babbonataleAzzurro from "../images/other/babbonataleAzzurro.jpeg"
import babbonataleRosso from "../images/other/babbonataleRosso.jpeg"
import babbonataleVerde from "../images/other/babbonataleVerde.jpeg"
import pupazzoNeveBlu from "../images/other/pupazzoNeveBlu.jpeg"
import pupazzoNeveRosso from "../images/other/pupazzoNeveRosso.jpeg"
import pupazzoNeveVerde from "../images/other/pupazzoNeveVerde.jpeg"
import pietreBianco from "../images/other/pietreBianco.jpeg"
import pietreGialleNere from "../images/other/pietreGialleNere.jpeg"
import pietreGialloChiaro from "../images/other/pietreGialloChiaro.jpeg"
import pietreRosse from "../images/other/pietreRosse.jpeg"
import cristalliLilla from "../images/other/cristalliLilla.jpeg"
import cristalliRosa from "../images/other/cristalliRosa.jpeg"
import cristalliRossi from "../images/other/cristalliRossi.jpeg"
import pallaArancione from "../images/other/pallaArancione.jpeg"
import pallaBlu from "../images/other/pallaBlu.jpeg"
import pallaCeleste from "../images/other/pallaCeleste.jpeg"
import pallaGialla from "../images/other/pallaGialla.jpeg"
import stellaGialla from "../images/other/stellaGialla.jpeg"
import stellaLime from "../images/other/stellaLime.jpeg"
import stellaArancione from "../images/other/stelleArancione.jpeg"
import stellaCeleste from "../images/other/stelleCeleste.jpeg"
import stellaLilla from "../images/other/stelleLilla.jpeg"
import stellaRosa from "../images/other/stelleRosa.jpeg"
import stellaRossa from "../images/other/stelleRossa.jpeg"
import stellaViola from "../images/other/stelleViola.jpeg"
import angeliArancione from "../images/other/angeliArancione.jpeg"
import angeliBianco from "../images/other/angeliBianco.jpeg"
import angeliBiancoLilla from "../images/other/angeliBiancoLilla.jpeg"
import angeliBlu from "../images/other/angeliBlu.jpeg"
import angeliCeleste from "../images/other/angeliCeleste.jpeg"
import angeliGiallo from "../images/other/angeliGiallo.jpeg"
import angeliLilla from "../images/other/angeliLilla.jpeg"
import angeliRosa from "../images/other/angeliRosa.jpeg"
import angeliRosaChiaro from "../images/other/angeliRosaChiaro.jpeg"
import angeliRosso from "../images/other/angeliRosso.jpeg"
import angeliRossoTr from "../images/other/angeliRossoTr.jpeg"


const menuElement = [
  {
    id: "0",
    section: "Home",
    path: "/",
    icon: <HomeIcon />,
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

const otherElements = [
  {
    id: uuidv4(),
    title: "Angelo Grigio Chiaro",
    desc: "prova",
    img: <Image src={angeloGrigioChiaro} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloGrigioChiaro} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloGrigioChiaro} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Angelo Lilla",
    desc: "prova",
    img: <Image src={angeloLilla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloLilla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloLilla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Angelo Lilla Chiaro",
    desc: "prova",
    img: <Image src={angeloLillaChiaro} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloLillaChiaro} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloLillaChiaro} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Angelo Marrone",
    desc: "prova",
    img: <Image src={angeloMarrone} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloMarrone} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloMarrone} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Angelo Marrone Chiaro",
    desc: "prova",
    img: <Image src={angeloMarrChiaro} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloMarrChiaro} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloMarrChiaro} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Angelo Rosa Antico",
    desc: "prova",
    img: <Image src={angeloRosaAntico} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloRosaAntico} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloRosaAntico} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Angelo Turchese",
    desc: "prova",
    img: <Image src={angeloTurchese} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeloTurchese} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeloTurchese} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Arancione",
    desc: "prova",
    img: <Image src={babbonataleArancione} width="300" height="250" placeholder="blur" />,
    imG: <Image src={babbonataleArancione} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={babbonataleArancione} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Azzurro",
    desc: "prova",
    img: <Image src={babbonataleAzzurro} width="300" height="250" placeholder="blur" />,
    imG: <Image src={babbonataleAzzurro} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={babbonataleAzzurro} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Rosso",
    desc: "prova",
    img: <Image src={babbonataleRosso} width="300" height="250" placeholder="blur" />,
    imG: <Image src={babbonataleRosso} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={babbonataleRosso} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Babbo Natale Verde",
    desc: "prova",
    img: <Image src={babbonataleVerde} width="300" height="250" placeholder="blur" />,
    imG: <Image src={babbonataleVerde} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={babbonataleVerde} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Pupazzo di neve Blu",
    desc: "prova",
    img: <Image src={pupazzoNeveBlu} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pupazzoNeveBlu} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pupazzoNeveBlu} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Pupazzo di neve Rosso",
    desc: "prova",
    img: <Image src={pupazzoNeveRosso} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pupazzoNeveRosso} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pupazzoNeveRosso} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Pupazzo di neve Verde",
    desc: "prova",
    img: <Image src={pupazzoNeveVerde} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pupazzoNeveVerde} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pupazzoNeveVerde} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in pietra bianca",
    desc: "prova",
    img: <Image src={pietreBianco} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pietreBianco} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pietreBianco} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in pietra gialla e nera",
    desc: "prova",
    img: <Image src={pietreGialleNere} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pietreGialleNere} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pietreGialleNere} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in pietra gialla trasparente",
    desc: "prova",
    img: <Image src={pietreGialloChiaro} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pietreGialloChiaro} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pietreGialloChiaro} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in pietra rossa",
    desc: "prova",
    img: <Image src={pietreRosse} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pietreRosse} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pietreRosse} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo lilla",
    desc: "prova",
    img: <Image src={cristalliLilla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={cristalliLilla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={cristalliLilla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo rosa",
    desc: "prova",
    img: <Image src={cristalliRosa} width="300" height="250" placeholder="blur" />,
    imG: <Image src={cristalliRosa} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={cristalliRosa} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo rosso",
    desc: "prova",
    img: <Image src={cristalliRossi} width="300" height="250" placeholder="blur" />,
    imG: <Image src={cristalliRossi} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={cristalliRossi} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo sferico arancione",
    desc: "prova",
    img: <Image src={pallaArancione} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pallaArancione} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pallaArancione} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo sferico blu",
    desc: "prova",
    img: <Image src={pallaBlu} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pallaBlu} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pallaBlu} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo sferico celeste",
    desc: "prova",
    img: <Image src={pallaCeleste} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pallaCeleste} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pallaCeleste} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo sferico giallo",
    desc: "prova",
    img: <Image src={pallaGialla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={pallaGialla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={pallaGialla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella giallo",
    desc: "prova",
    img: <Image src={stellaGialla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaGialla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaGialla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella lime",
    desc: "prova",
    img: <Image src={stellaLime} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaLime} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaLime} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella arancione",
    desc: "prova",
    img: <Image src={stellaArancione} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaArancione} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaArancione} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella celeste",
    desc: "prova",
    img: <Image src={stellaCeleste} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaCeleste} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaCeleste} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella lilla",
    desc: "prova",
    img: <Image src={stellaLilla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaLilla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaLilla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella rosa",
    desc: "prova",
    img: <Image src={stellaRosa} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaRosa} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaRosa} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella rossa",
    desc: "prova",
    img: <Image src={stellaRossa} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaRossa} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaRossa} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini in cristallo stella viola",
    desc: "prova",
    img: <Image src={stellaViola} width="300" height="250" placeholder="blur" />,
    imG: <Image src={stellaViola} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={stellaViola} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo arancione",
    desc: "prova",
    img: <Image src={angeliArancione} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliArancione} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliArancione} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo bianco",
    desc: "prova",
    img: <Image src={angeliBianco} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliBianco} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliBianco} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo bianco lilla",
    desc: "prova",
    img: <Image src={angeliBiancoLilla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliBiancoLilla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliBiancoLilla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo blu",
    desc: "prova",
    img: <Image src={angeliBlu} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliBlu} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliBlu} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo celeste",
    desc: "prova",
    img: <Image src={angeliCeleste} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliCeleste} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliCeleste} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo giallo",
    desc: "prova",
    img: <Image src={angeliGiallo} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliGiallo} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliGiallo} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo lilla",
    desc: "prova",
    img: <Image src={angeliLilla} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliLilla} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliLilla} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo rosa",
    desc: "prova",
    img: <Image src={angeliRosa} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliRosa} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliRosa} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo rosa chiaro",
    desc: "prova",
    img: <Image src={angeliRosaChiaro} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliRosaChiaro} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliRosaChiaro} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo rosso",
    desc: "prova",
    img: <Image src={angeliRosso} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliRosso} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliRosso} placeholder="blur" />,
    category: "Bigiotteria",
  },
  {
    id: uuidv4(),
    title: "Orecchini angelo rosso cristallo",
    desc: "prova",
    img: <Image src={angeliRossoTr} width="300" height="250" placeholder="blur" />,
    imG: <Image src={angeliRossoTr} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={angeliRossoTr} placeholder="blur" />,
    category: "Bigiotteria",
  },
];

const necklaceElements = [
  {
    id: "0",
    title: "Collana in oro con pietre rosse",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore rosso.",
    img: <Image src={collana01} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana01} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana01} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "1",
    title: "Collana in oro con pietre nere e gialle",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore nero e giallo.",
    img: <Image src={collana02} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana02} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana02} placeholder="blur" />,
    link: "https://www.subito.it/abbigliamento-accessori/collana-in-chiacchierino-con-perle-in-ceramica-campobasso-459925750.htm",
    category: "Chiacchierino",
  },
  {
    id: "2",
    title: "Collana con pietre arancioni",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato arancione e pietre di colore arancione.",
    img: <Image src={collana03} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana03} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana03} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "3",
    title: "Collana in oro con pietre blu",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore blu.",
    img: <Image src={collana04} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana04} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana04} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "4",
    title: "Collana in oro con pietre rosa e perle bianche",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato, pietre rosa e perle bianche.",
    img: <Image src={collana05} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana05} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana05} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "5",
    title: "Collana in oro con pietre marroni",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore marrone.",
    img: <Image src={collana06} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana06} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana06} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "6",
    title: "Collana in argento con pietre colorate",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato argento metallizzato e pietre di colore vario.",
    img: <Image src={collana07} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana07} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana07} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "7",
    title: "Collana in blu notte con pietre blu",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato blu notte e pietre di colore blu.",
    img: <Image src={collana08} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana08} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana08} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "8",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana09} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana09} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana09} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "9",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana10} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana10} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana10} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "10",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana11} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana11} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana11} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "11",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana12} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana12} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana12} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "12",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana13} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana13} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana13} placeholder="blur" />,
    link: "https://www.misshobby.com/it/oggetti/collana-in-chiacchierino-con-perle-di-ceramica-multicolor",
    category: "Chiacchierino",
  },
  {
    id: "13",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana14} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana14} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana14} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "14",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana15} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana15} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana15} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "15",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana16} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana16} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana16} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "16",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana17} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana17} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana17} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "17",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana18} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana18} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana18} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "18",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana19} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana19} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana19} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "19",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana20} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana20} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana20} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "20",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana21} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana21} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana21} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "21",
    title: "Collana AllBlack",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana22} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana22} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana22} placeholder="blur" />,
    category: "Chiacchierino",
  },
  {
    id: "22",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana23} width="300" height="250" placeholder="blur" />,
    imG: <Image src={collana23} width="450" height="300" placeholder="blur" />,
    imZ: <Image src={collana23} placeholder="blur" />,
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

export { menuElement, necklaceElements, axiosToData, otherElements };
