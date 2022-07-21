import { StaticImageData } from "next/image";

export interface ProjectType {
	title: string;
	url: string;
	colors: Array<string>;
	image: StaticImageData;
	fonts: Array<string>;
	tech: Array<string>;
}

export interface FooterType {
	icon: string;
	link: string;
	name: string;
}
