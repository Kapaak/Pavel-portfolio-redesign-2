//libs
import styled from "styled-components";
import { Underscore } from "../../styles/GlobalStyles";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<StyledTextWrapper>
				<h1>Contact</h1>
				<p>
					I am always open to new challenges. Want to create something great
					together? Or just say hello? Feel free to ask me anything.
				</p>
				<Underscore>pavel.zaplet25@gmail.com</Underscore>
			</StyledTextWrapper>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	flex: 1 1 75%;
	padding: var(--vertical-gap) var(--horizontal-gap);
	background-color: var(--third-col);
`;

const StyledTextWrapper = styled.div`
	width: 100%;
	background-color: var(--third-col);

	p {
		margin-bottom: var(--text-mb);
	}
`;
