import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
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
    section: "Contattaci",
    path: "contactUs/",
    icon: <MailIcon />,
  },
];

const uncinettoElements = [
  {
    id: "0",
    title: "Collana in oro con pietre rosse",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore rosso.",
    img: <Image src={collana01} width="300" height="250" />,
    imG: <Image src={collana01} width="450" height="300" />,
    imZ: <Image src={collana01} />,
  },
  {
    id: "1",
    title: "Collana in oro con pietre nere e gialle",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore nero e giallo.",
    img: <Image src={collana02} width="300" height="250" />,
    imG: <Image src={collana02} width="450" height="300" />,
    imZ: <Image src={collana02} />,
  },
  {
    id: "2",
    title: "Collana con pietre arancioni",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato arancione e pietre di colore arancione.",
    img: <Image src={collana03} width="300" height="250" />,
    imG: <Image src={collana03} width="450" height="300" />,
    imZ: <Image src={collana03} />,
  },
  {
    id: "3",
    title: "Collana in oro con pietre blu",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore blu.",
    img: <Image src={collana04} width="300" height="250" />,
    imG: <Image src={collana04} width="450" height="300" />,
    imZ: <Image src={collana04} />,
  },
  {
    id: "4",
    title: "Collana in oro con pietre rosa e perle bianche",
    desc: "Collana realizzata  in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato, pietre rosa e perle bianche.",
    img: <Image src={collana05} width="300" height="250" />,
    imG: <Image src={collana05} width="450" height="300" />,
    imZ: <Image src={collana05} />,
  },
  {
    id: "5",
    title: "Collana in oro con pietre marroni",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato oro metallizzato e pietre di colore marrone.",
    img: <Image src={collana06} width="300" height="250" />,
    imG: <Image src={collana06} width="450" height="300" />,
    imZ: <Image src={collana06} />,
  },
  {
    id: "6",
    title: "Collana in argento con pietre colorate",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato argento metallizzato e pietre di colore vario.",
    img: <Image src={collana07} width="300" height="250" />,
    imG: <Image src={collana07} width="450" height="300" />,
    imZ: <Image src={collana07} />,
  },
  {
    id: "7",
    title: "Collana in blu notte con pietre blu",
    desc: "Collana realizzata in pizzo chiacchierino fatta interamente a mano. Per realizzarla ho utilizzato un filato blu notte e pietre di colore blu.",
    img: <Image src={collana08} width="300" height="250" />,
    imG: <Image src={collana08} width="450" height="300" />,
    imZ: <Image src={collana08} />,
  },
  {
    id: "8",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana09} width="300" height="250" />,
    imG: <Image src={collana09} width="450" height="300" />,
    imZ: <Image src={collana09} />,
  },
  {
    id: "9",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana10} width="300" height="250" />,
    imG: <Image src={collana10} width="450" height="300" />,
    imZ: <Image src={collana10} />,
  },
  {
    id: "10",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana11} width="300" height="250" />,
    imG: <Image src={collana11} width="450" height="300" />,
    imZ: <Image src={collana11} />,
  },
  {
    id: "11",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana12} width="300" height="250" />,
    imG: <Image src={collana12} width="450" height="300" />,
    imZ: <Image src={collana12} />,
  },
  {
    id: "12",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana13} width="300" height="250" />,
    imG: <Image src={collana13} width="450" height="300" />,
    imZ: <Image src={collana13} />,
  },
  {
    id: "13",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana14} width="300" height="250" />,
    imG: <Image src={collana14} width="450" height="300" />,
    imZ: <Image src={collana14} />,
  },
  {
    id: "14",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={collana15} width="300" height="250" />,
    imG: <Image src={collana15} width="450" height="300" />,
    imZ: <Image src={collana15} />,
  },
  {
    id: "15",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana16} width="300" height="250" />,
    imG: <Image src={collana16} width="450" height="300" />,
    imZ: <Image src={collana16} />,
  },
  {
    id: "16",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana17} width="300" height="250" />,
    imG: <Image src={collana17} width="450" height="300" />,
    imZ: <Image src={collana17} />,
  },
  {
    id: "17",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana18} width="300" height="250" />,
    imG: <Image src={collana18} width="450" height="300" />,
    imZ: <Image src={collana18} />,
  },
  {
    id: "18",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana19} width="300" height="250" />,
    imG: <Image src={collana19} width="450" height="300" />,
    imZ: <Image src={collana19} />,
  },
  {
    id: "19",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana20} width="300" height="250" />,
    imG: <Image src={collana20} width="450" height="300" />,
    imZ: <Image src={collana20} />,
  },
  {
    id: "20",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana21} width="300" height="250" />,
    imG: <Image src={collana21} width="450" height="300" />,
    imZ: <Image src={collana21} />,
  },
  {
    id: "21",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana22} width="300" height="250" />,
    imG: <Image src={collana22} width="450" height="300" />,
    imZ: <Image src={collana22} />,
  },
  {
    id: "22",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={collana23} width="300" height="250" />,
    imG: <Image src={collana23} width="450" height="300" />,
    imZ: <Image src={collana23} />,
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

export { menuElement, uncinettoElements, axiosToData };
