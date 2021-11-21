import React from "react";
//styles
import styled from "styled-components";
import Wrapper from "./Wrapper";

const AboutPage = () => {
	return (
		<StyledAboutPage id="about-page">
			<Wrapper />
		</StyledAboutPage>
	);
};

export default AboutPage;

const StyledAboutPage = styled.div`
	position: relative;
	display: flex;
	z-index: 1;
`;
