//libs
import styled from "styled-components";
//components
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
//breakpoints
import Breakpoints from "../global/Breakpoints";

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
	position: relative;
	display: flex;
	justify-content: center;
	background: rgba(232, 231, 231, 1);
`;

const StyledTextWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	padding: var(--vertical-gap) var(--horizontal-gap) var(--horizontal-gap);
	background-color: var(--third-col);
	max-width: 144rem;
	z-index: 3;

	@media ${Breakpoints.tablet} {
		margin: 0 var(--horizontal-gap);
		border-radius: var(--br-main);
	}
	@media ${Breakpoints.desktop} {
		flex-direction: row;
	}
`;
