import styled from "styled-components";
//components
import InnerContainer from "components/AboutPage/InnerContainer";
//styles
import { Section } from "@/styledComponents/index";

const AboutPage = () => {
	return (
		<Section id="about-page" background="var(--col2)">
			<InnerContainer />
		</Section>
	);
};

export default AboutPage;
