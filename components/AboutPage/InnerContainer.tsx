//libs
import styled from "styled-components";
//components
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<StyledTextWrapper>
				<TextContainer />
				<ImageContainer />
			</StyledTextWrapper>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	flex: 1 1 75%;
	width: 100%;
`;

const StyledTextWrapper = styled.div`
	width: 100%;
	background-color: var(--third-col);
	/* margin: var(--horizontal-gap); */
`;
