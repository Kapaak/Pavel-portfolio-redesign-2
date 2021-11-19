//components
import InnerContainer from "./InnerContainer";
//styles
import styled from "styled-components";
import { breakpoints } from "@/styledComponents/index";

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
		max-width: 74rem;
		margin: 0 auto;
		z-index: 2;
		@media ${breakpoints.tablet} {
			border-radius: var(--br-main);
			text-align: center;
			padding: 6rem 10rem;
		}
	}
`;
