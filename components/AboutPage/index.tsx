import styled from "styled-components";
//components
import InnerContainer from "./InnerContainer";
//styles
import { AnimationRevealDiv, MaxWidth, Section } from "styles/customs";

const AboutPage = () => {
	return (
		<SAboutPage id="about-page">
			<AnimationRevealDiv>
				<MaxWidth>
					<InnerContainer />
				</MaxWidth>
			</AnimationRevealDiv>
		</SAboutPage>
	);
};

const SAboutPage = styled(Section)`
	background-color: var(--col2);
`;

export default AboutPage;
