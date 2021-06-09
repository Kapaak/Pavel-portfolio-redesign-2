//components
import Wrapper from "./Wrapper";
//styles
import styled from "styled-components";
//breakpoints
import Breakpoints from "../global/Breakpoints";

const index = () => {
	return (
		<StyledHomePage id="home-page">
			<Wrapper />
		</StyledHomePage>
	);
};

export default index;

const StyledHomePage = styled.div`
	position: relative;
	min-height: 100vh;
	background: rgb(232, 231, 231);
	background: linear-gradient(
		1deg,
		rgba(232, 231, 231, 1) 0%,
		rgba(246, 246, 246, 1) 100%
	);

	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	padding: var(--vertical-gap) var(--horizontal-gap);

	@media ${Breakpoints.tablet} {
		align-items: center;
	}
`;
