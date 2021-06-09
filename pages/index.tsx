//components
import Nav from "../components/Nav";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import PortfolioPage from "../components/PortfolioPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
import LoadingPage from "../components/LoadingPage";
//data
import data from "../data";
import { footerData } from "../data";

export default function Home() {
	return (
		<div>
			{/* <LoadingPage /> */}
			<Nav />
			<HomePage />
			<AboutPage />
			<PortfolioPage data={data()} />
			<ContactPage />
			<Footer data={footerData()} />
		</div>
	);
}
