//libs
import styled from "styled-components";
//components
import Nav from "../components/global/Nav";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import PortfolioPage from "../components/PortfolioPage";
//data
import data from "../data";

export default function Home() {
	return (
		<div>
			<Nav />
			<HomePage />
			<AboutPage />
			<PortfolioPage data={data()} />
		</div>
	);
}
