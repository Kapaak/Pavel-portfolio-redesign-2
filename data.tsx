//interfaces
import { ProjectType, FooterType } from "./interfaces/index";
//images
import AmbrozImage from "./public/images/projects/Ambroz.png";
import BarboraNovakovaImage from "./public/images/projects/BarboraNovakova.png";
import RickAndMortyImage from "./public/images/projects/RickAndMorty.png";
import KuchtaBuchtaImage from "./public/images/projects/KuchtaBuchta.png";
import ChatAppImage from "./public/images/projects/ChatApp.png";

export const projectData: Array<ProjectType> = [
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
		url: "https://barboranovakova.vercel.app/",
		image: BarboraNovakovaImage,
		fonts: ["Roboto", "Righteous"],
		tech: ["Next.js", "Sanity.io"],
	},
	// {
	// 	title: "Stomatologie Ambrožovi",
	// 	colors: ["#FE6246", "#E5568F", "#F6C64E"],
	// 	url: "https://ambroz-dent.vercel.app/",
	// 	image: AmbrozImage,
	// 	fonts: ["InitialFont", "InitialFont2"],
	// 	tech: ["DefaultTech", "DefaultTech2"],
	// },
	{
		title: "Rick and Morty",
		colors: ["#001427", "#A2F3BC", "#F5BB40"],
		url: "https://rick-a-morty.vercel.app/",
		image: RickAndMortyImage,
		fonts: ["Rajdhani"],
		tech: ["Next.js", "Rick and Morty API"],
	},
	{
		title: "Chat app",
		colors: ["#ececec", "#163cff"],
		url: "https://chat-app-final.vercel.app/",
		image: ChatAppImage,
		fonts: ["Raleway"],
		tech: ["Next.js", "Firebase"],
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
