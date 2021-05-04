//components
import InnerContainer from "./InnerContainer";
//styles
import styled from "styled-components";
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
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;

	& > div {
		display: flex;
		z-index: 2;
		@media ${Breakpoints.tablet} {
			border-radius: var(--br-main);
			margin: 0 var(--horizontal-gap);
			text-align: center;
		}
	}
`;
