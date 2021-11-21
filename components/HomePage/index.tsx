//components
import Wrapper from "./Wrapper";
//styles
import styled from "styled-components";
//breakpoints
import { breakpoints } from "@/styledComponents/index";

const HomePage = () => {
	return (
		<StyledHomePage id="home-page">
			<Wrapper />
		</StyledHomePage>
	);
};

export default HomePage;

const StyledHomePage = styled.div`
	position: relative;
	min-height: 100vh;
	background: var(--bg-col);

	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: var(--vertical-gap) var(--horizontal-gap);

	@media ${breakpoints.tablet} {
		align-items: center;
	}
`;
