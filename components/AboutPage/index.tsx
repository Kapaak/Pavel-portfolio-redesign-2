import styled from "styled-components";
//components
import InnerContainer from "components/AboutPage/InnerContainer";

const AboutPage = () => {
	return (
		<StyledAboutPage id="about-page">
			<InnerContainer />
		</StyledAboutPage>
	);
};

export default AboutPage;

const StyledAboutPage = styled.div`
	position: relative;
	display: flex;
	z-index: 1;
`;
