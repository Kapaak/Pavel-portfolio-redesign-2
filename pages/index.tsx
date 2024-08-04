import { HomePage } from "../components/HomePage";
import { AboutPage } from "../components/AboutPage";
import ProjectsPage from "components/ProjectsPage";
import { ContactPage } from "../components/ContactPage";
import { projectData } from "../data";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectsPage data={projectData} />
      <ContactPage />
    </main>
  );
}
