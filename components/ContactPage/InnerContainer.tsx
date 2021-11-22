//libs
import styled from "styled-components";
//styles
import { Headline, breakpoints, Text } from "@/styledComponents/index";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<Headline invertColors>Contact</Headline>
			<TextWrapper>
				<Text>
					I am always open to new challenges. Want to create something great
					together? Or just say hello? Feel free to ask me anything.
				</Text>
			</TextWrapper>
			<HighlightedText>pavel.zaplet25@gmail.com</HighlightedText>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	@media ${breakpoints.tabletS} {
		align-items: center;
	}
`;

const TextWrapper = styled.div`
	@media ${breakpoints.tabletS} {
		padding: 0 var(--horizontal-gap);
	}
`;

const HighlightedText = styled.div`
	position: relative;
	line-height: 2;

	border-bottom: 2px solid var(--bg-col);
`;
