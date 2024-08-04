import { FooterType } from "@/interfaces";
import ReactIcon from "../public/icons/react.svg";
import GithubIcon from "../public/icons/github2.svg";
import TypescriptIcon from "../public/icons/typescript.svg";
import NextjsIcon from "../public/icons/nextjs.svg";
import SvelteIcon from "../public/icons/svelte.svg";
import SanityIcon from "../public/icons/sanity.svg";

export const footerIcons: Array<FooterType> = [
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

export const movingIcons = [
  { img: GithubIcon, name: "github", position: [10, 35] },
  { img: NextjsIcon, name: "next.js", position: [40, 40] },
  { img: ReactIcon, name: "react", position: [55, 60] },
  { img: TypescriptIcon, name: "typescript", position: [65, 28] },
  { img: SvelteIcon, name: "svelte", position: [25, 12] },
  { img: SanityIcon, name: "sanity.io", position: [25, 65] },
];
