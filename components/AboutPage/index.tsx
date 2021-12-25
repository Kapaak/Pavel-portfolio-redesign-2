import styled from "styled-components";
//components
import InnerContainer from "./InnerContainer";
//styles
import { MaxWidth, Section } from "styles/customs";

const AboutPage = () => {
	return (
		<SAboutPage id="about-page">
			<MaxWidth>
				<InnerContainer />
			</MaxWidth>
		</SAboutPage>
	);
};

const SAboutPage = styled(Section)`
	background-color: var(--col2);
`;

export default AboutPage;
