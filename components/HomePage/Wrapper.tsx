//libs
import styled from "styled-components";
//components
import InnerContainer from "./InnerContainer";
//breakpoints
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
	display: flex;
	width: 100%;
	max-width: 144rem;
	margin: 0 auto;

	@media ${breakpoints.tablet} {
		justify-content: center;
	}
`;
