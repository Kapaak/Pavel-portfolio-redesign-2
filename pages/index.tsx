//components
import Nav from "../components/Navigation";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import ProjectsPage from "components/ProjectsPage";
import ContactPage from "../components/ContactPage";
import Footer from "../components/Footer";
//data
import { footerData, projectData } from "../data";

export default function Home() {
	return (
		<>
			<Nav />
			<HomePage />
			<AboutPage />
			<ProjectsPage data={projectData} />
			<ContactPage />
			<Footer data={footerData} />
		</>
	);
}
