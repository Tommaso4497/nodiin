import MailIcon from "@mui/icons-material/Mail";
import CollectionsIcon from "@mui/icons-material/Collections";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import orecchini from "../images/orecchini.jpg";

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
    path: "/chiacchierino/Chiacchierino",
    icon: <CollectionsIcon />,
  },
  {
    id: "2",
    section: "Uncinetto",
    path: "/uncinetto/Uncinetto",
    icon: <CollectionsIcon />,
  },
  {
    id: "3",
    section: "Contattaci",
    path: "/contactUs/contactUs",
    icon: <MailIcon />,
  },
];


const uncinettoElements = [
  {
    id: "0",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={orecchini} width="500" height="450" />,
  },
  {
    id: "1",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={orecchini} width="500" height="450" />,
  },
  {
    id: "2",
    title: "Orecchini argento",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    img: <Image src={orecchini} width="500" height="450" />,
  },
  {
    id: "3",
    desc: "Orecchini in pizzo fatti interamente a mano con l'antica tecnica del chiacchierino con filato argento metallizzato e ricamato con cristalli e pietre in sfumature di colore blu.",
    title: "Orecchini argento",
    img: <Image src={orecchini} width="500" height="450" />,
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
  uncinettoElements,
  axiosToData,
};

