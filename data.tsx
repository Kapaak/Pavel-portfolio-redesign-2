//interfaces
import { ProjectType, FooterType } from "./interfaces/index";
//images
import Kometa from "./public/images/projects/kometa.png";
import BarboraNovakovaImage from "./public/images/projects/bara-novakova.png";
import PetrWalachImage from "./public/images/projects/petr-walach-portfolio.png";
import KuchtaBuchtaImage from "./public/images/projects/kuchta-buchta.png";
import Primestak from "./public/images/projects/primestak.png";
import Routist from "./public/images/projects/routist.png";
import KometaSwimmingImage from "./public/images/projects/kometa-plavani.jpeg";

export const projectData: Array<ProjectType> = [
  {
    title: "Kometa plavání",
    colors: ["#014b8b", "#ffca0f"],
    url: "https://www.kometaplavani.cz/",
    image: KometaSwimmingImage,
    fonts: ["Bebas Neue", "Poppins"],
    tech: ["Next.js", "Sanity.io"],
  },
  {
    title: "Petr Walach",
    colors: ["#0f2786", "#f75252"],
    url: "https://www.petrwalach.cz/",
    image: PetrWalachImage,
    fonts: ["Bebas Neue", "Karla"],
    tech: ["Astro.js", "Sanity.io", "Email.js"],
  },
  {
    title: "Routist",
    colors: ["#FBB034", "#f9f9f9"],
    url: "https://www.routist.cz/",
    image: Routist,
    fonts: ["Bebas Neue", "Poppins"],
    tech: ["Next.js", "Next Auth", "Prisma"],
  },
  {
    title: "Tábory Riviéra",
    colors: ["#2172DD", "#73F0C0", "#FEFEFE"],
    url: "https://www.primestak-brno.cz/",
    image: Primestak,
    fonts: ["Bebas Neue", "Poppins"],
    tech: ["Next.js", "Sanity.io"],
  },
  {
    title: "Plavání Lužánky",
    colors: ["#2172DD", "#FFCA0F", "#FEFEFE"],
    url: "https://www.plavani-luzanky.cz/",
    image: Kometa,
    fonts: ["Bebas Neue", "Poppins"],
    tech: ["Next.js", "Sanity.io"],
  },
  {
    title: "Kuchta Buchta",
    colors: ["#B0235F", "#FA7268", "#363636"],
    url: "https://kuchta-buchta.vercel.app/",
    image: KuchtaBuchtaImage,
    fonts: ["Oswald", "Rajdhani"],
    tech: ["Next.js", "Sanity.io"],
  },
  {
    title: "Barbora Nováková",
    colors: ["#F8F8F8", "#8D0801", "#001427 "],
    url: "https://barboranovakova.cz/",
    image: BarboraNovakovaImage,
    fonts: ["Roboto", "Righteous"],
    tech: ["Next.js", "Sanity.io"],
  },
];

export const footerData: Array<FooterType> = [
  {
    icon: "/icons/codepen.svg",
    link: "https://codepen.io/Kapaak",
    name: "codepen icon",
  },
  {
    icon: "/icons/github.svg",
    link: "https://github.com/Kapaak",
    name: "github icon",
  },
  {
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/pavel-zapletal-903bb2188/",
    name: "linkedin icon",
  },
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/pavel_kapaak/",
    name: "instagram icon",
  },
  {
    icon: "/icons/facebook.svg",
    link: "https://www.facebook.com/pavel.kappa.zapletal",
    name: "facebook icon",
  },
];
