//libs
import { Headline } from "@/styledComponents/index";
import styled from "styled-components";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<StyledTextWrapper>
				<Headline invertColors>Contact</Headline>
				<p>
					I am always open to new challenges. Want to create something great
					together? Or just say hello? Feel free to ask me anything.
				</p>
				<HighlightedText>pavel.zaplet25@gmail.com</HighlightedText>
			</StyledTextWrapper>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div``;

const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
`;

const HighlightedText = styled.div`
	position: relative;
	line-height: 2;

	border-bottom: 2px solid var(--bg-col);
`;
