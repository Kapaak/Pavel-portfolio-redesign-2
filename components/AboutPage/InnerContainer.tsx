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
			<StyledTextOutterWrapper>
				<StyledTextWrapper>
					<TextContainer />
					<ImageContainer />
				</StyledTextWrapper>
			</StyledTextOutterWrapper>
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
const StyledTextOutterWrapper = styled.div`
	position: relative;

	padding: var(--vertical-gap) var(--horizontal-gap) var(--horizontal-gap);
	background-color: var(--third-col);
	max-width: 165rem;
	width: 100%;
	z-index: 3;

	@media ${Breakpoints.tablet} {
		margin: 0 var(--horizontal-gap);
		border-radius: var(--br-main);
	}
`;

const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media ${Breakpoints.desktop} {
		flex-direction: row;
	}

	@media ${Breakpoints.desktopB} {
		max-width: 140rem;
		margin: 0 auto;
	}
`;
