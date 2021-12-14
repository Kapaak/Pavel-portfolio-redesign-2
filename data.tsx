//interfaces
import { ProjectType, FooterType } from "./interfaces/index";
//images
import AmbrozImage from "./public/images/projects/Ambroz.png";
import BarboraNovakovaImage from "./public/images/projects/BarboraNovakova.png";
import RickAndMortyImage from "./public/images/projects/RickAndMorty.png";

export const projectData: Array<ProjectType> = [
	{
		title: "Barbora Nováková",
		colors: ["#B66460", "#F4D58D", "#F8F8F8 "],
		url: "https://barboranovakova.vercel.app/",
		image: BarboraNovakovaImage,
		fonts: ["InitialFont", "InitialFont2"],
		tech: ["DefaultTech", "DefaultTech2"],
	},
	{
		title: "Stomatologie Ambrožovi",
		colors: ["#FE6246", "#E5568F", "#F6C64E"],
		url: "https://ambroz-dent.vercel.app/",
		image: AmbrozImage,
		fonts: ["InitialFont", "InitialFont2"],
		tech: ["DefaultTech", "DefaultTech2"],
	},
	{
		title: "Rick & Morty database",
		colors: ["#01383A", "#88BE43", "#F5C1A0"],
		url: "https://rick-and-morty-dbs.vercel.app/",
		image: RickAndMortyImage,
		fonts: ["InitialFont", "InitialFont2"],
		tech: ["DefaultTech", "DefaultTech2"],
	},
];

export const footerData: Array<FooterType> = [
	{
		icon: "/icons/codepen.svg",
		link: "https://codepen.io/Kapaak",
	},
	{
		icon: "/icons/github.svg",
		link: "https://github.com/Kapaak",
	},
	{
		icon: "/icons/linkedin.svg",
		link: "https://www.linkedin.com/in/pavel-zapletal-903bb2188/",
	},
	{
		icon: "/icons/instagram.svg",
		link: "https://www.instagram.com/pavel_kapaak/",
	},
	{
		icon: "/icons/facebook.svg",
		link: "https://www.facebook.com/pavel.kappa.zapletal",
	},
];
