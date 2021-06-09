import React from "react";
//styles
import styled from "styled-components";
import Wrapper from "./Wrapper";

const index = () => {
	return (
		<StyledAboutPage id="about-page">
			<Wrapper />
		</StyledAboutPage>
	);
};

export default index;

const StyledAboutPage = styled.div`
	position: relative;
	display: flex;
	z-index: 1;
`;
