//libs
import styled from "styled-components";
//components
import InnerContainer from "./InnerContainer";
//breakpoints
import Breakpoints from "../global/Breakpoints";

const Wrapper = () => {
	return (
		<StyledWrapper>
			<InnerContainer />
		</StyledWrapper>
	);
};

export default Wrapper;

const StyledWrapper = styled.div`
	display: flex;
	width: 100%;
	max-width: 144rem;
	margin: 0 auto;

	@media ${Breakpoints.tablet} {
		justify-content: center;
	}
`;
