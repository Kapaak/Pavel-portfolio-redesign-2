import { PortfolioObject, FooterObject } from "./components/global/Interfaces";

const data = (): Array<PortfolioObject> => [
	{
		title: "Barbora Nováková",
		// description: `Vytvoření webové stránky, která má za cíl prezentovat tvorbu studentky
		// architektury. Stránky jsou vytvořeny s důrazem na minimalismus s
		// jednoduchými animacemi a sjednocenou grafikou. Na webu jsou zdůrazněny
		// oblíbené barvy mladé architektky.`,
		description: `Website portfolio for a student of architecture. The goal
		was to create a minimalistic design with subtle animations that would 
		represent skills and work experience. Colors used were picked by the 
		young architect.`,
		colors: ["#B66460", "#F4D58D", "#F8F8F8 "],
		url: "https://barboranovakova.vercel.app/",
		image: "/images/projects/Barbora-portfolio.png",
	},
	{
		title: "Stomatologie Ambrožovi",
		// description: `Redesign webových stránek pro stomatologickou ordinaci MUDr. Zdeňka Ambrože a jeho tým.
		// Jednotlivé stránky ordinace jsou sladěny do barev ordiance, stejně jako převzaté logo.
		// Stránky jsou přehledné, s jasnou strukturou a čistou grafikou. `,
		description: `New design and web for a dental clinic of MUDr. Zdenek Ambroz. Each page has a different
		color variant according to the real colors of departments, logo design hasn't changed. The overall look
		is clean and it is very easy for users to navigate in.`,
		colors: ["#FE6246", "#E5568F", "#F6C64E"],
		url: "https://ambroz-dent.vercel.app/",
		image: "/images/projects/Ambroz-web.png",
		status: "in progress",
	},
	{
		title: "Rick & Morty database",
		description: `This is a Rick and Morty character database. I have used an official API to get the data about
		all the characters, that are in the series. The main color is derived from Rick's portal, to give it a Rick and
		Morty feel.`,
		colors: ["#01383A", "#88BE43", "#F5C1A0"],
		url: "https://rick-and-morty-dbs.vercel.app/",
		image: "/images/projects/RickAndMorty-app.png",
	},
];

export const footerData = (): Array<FooterObject> => [
	{
		icon: "/images/icons/codepen.svg",
		link: "https://codepen.io/Kapaak",
	},
	{
		icon: "/images/icons/github2.svg",
		link: "https://github.com/Kapaak",
	},
	{
		icon: "/images/icons/linkedin.svg",
		link: "https://www.linkedin.com/in/pavel-zapletal-903bb2188/",
	},
	{
		icon: "/images/icons/instagram.svg",
		link: "https://www.instagram.com/pavel_kapaak/",
	},
	{
		icon: "/images/icons/facebook.svg",
		link: "https://www.facebook.com/pavel.kappa.zapletal",
	},
];

export default data;
