//components
import Nav from "../components/Nav";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
//data
import data from "../data";
import { footerData } from "../data";
import styled from "styled-components";

export default function Home() {
	return (
		<>
			<Nav />
			<HomePage />
			<AboutPage />
			{/* <Test>
				<div>div 1 iamge</div>
				<VerticalText>
					<p>div 2 vertical</p>
					<div></div>
				</VerticalText>
				<div>div 3 text</div>
			</Test> */}
			{/* <PortfolioPage data={data()} />  */}
			<ContactPage />
			<Footer data={footerData()} />
		</>
	);
}

// const Test = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `;

// const VerticalText = styled.div`
// 	display: flex;
// 	/* writing-mode: vertical-lr; */
// 	/* transform: scale(-1); */
// 	align-items: center;

// 	& > div {
// 		width: 0.1rem;
// 		height: 4rem;
// 		background: black;
// 	}
// `;
