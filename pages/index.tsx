//components
import Nav from "../components/Nav";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
//data
import data from "../data";
import { footerData } from "../data";

export default function Home() {
	return (
		<>
			<Nav />
			<HomePage />
			<AboutPage />
			{/* <PortfolioPage data={data()} />  */}
			<ContactPage />
			<Footer data={footerData()} />
		</>
	);
}
