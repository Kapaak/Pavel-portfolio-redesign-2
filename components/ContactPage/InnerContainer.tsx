//libs
import styled from "styled-components";
//styles
import { Headline, breakpoints, Text } from "@/customs/index";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<Headline invertColors>Contact</Headline>
			<TextWrapper>
				<Text>
					I am always available for new challenges. If you want to create
					something awesome or just ask, don't hesitate to contact me.
				</Text>
			</TextWrapper>
			<HighlightedText>
				<a href="mailto:pavel.zaplet25@gmail.com">pavel.zaplet25@gmail.com</a>
			</HighlightedText>
			<HighlightedText>
				<a href="/CV.pdf" download>
					download curriculum vitae
				</a>
			</HighlightedText>
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
		width: 77%;
	}
`;

const HighlightedText = styled.div`
	position: relative;
	line-height: 2;
	font-size: var(--f-t);
	border-bottom: 2px solid var(--bg-col);

	a {
		color: inherit;
		text-decoration: none;
	}
`;
