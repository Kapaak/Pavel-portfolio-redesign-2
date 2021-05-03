import { PortfolioObject, FooterObject } from "./components/global/Interfaces";

const data = (): Array<PortfolioObject> => [
	{
		title: "Barbora Nováková",
		description: `Vytvoření webové stránky, která má za cíl prezentovat tvorbu studentky
        architektury. Stránky jsou vytvořeny s důrazem na minimalismus s
        jednoduchými animacemi a sjednocenou grafikou. Na webu jsou zdůrazněny
        oblíbené barvy mladé architektky.`,
		colors: ["#B66460", "#F4D58D", "#F8F8F8 "],
		url: "https://barboranovakova.vercel.app/",
		image: "/images/projects/Barbora-portfolio.png",
	},
	{
		title: "Stomatologie Ambrožovi",
		description: `Redesign webových stránek pro stomatologickou ordinaci MUDr. Zdeňka Ambrože a jeho tým. 
		Jednotlivé stránky ordinace jsou sladěny do barev ordiance, stejně jako převzaté logo.
		Stránky jsou přehledné, s jasnou strukturou a čistou grafikou. `,
		colors: ["#FE6246", "#E5568F", "#F6C64E"],
		url: "https://barboranovakova.vercel.app/",
		image: "/images/projects/Ambroz-web.png",
	},
	{
		title: "Barbora Nováková",
		description: `Vytvoření webové stránky, která má za cíl prezentovat tvorbu studentky
        architektury. Stránky jsou vytvořeny s důrazem na minimalismus s
        jednoduchými animacemi a sjednocenou grafikou. Na webu jsou zdůrazněny
        oblíbené barvy mladé architektky.`,
		colors: ["#0ca52d", "#aa3c3c", "#ababab"],
		url: "https://barboranovakova.vercel.app/",
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
