//libs
import styled from "styled-components";
//components
import TextContainer from "./TextContainer";
//breakpoints
import { breakpoints } from "styles/customs";

const InnerContainer = () => {
	return (
		<StyledInnerContainer>
			<TextContainer />
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media ${breakpoints.desktop} {
		flex-direction: row;
	}
`;
