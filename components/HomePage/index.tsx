//libraries
import Div100vh from "react-div-100vh";
import styled from "styled-components";
//components
import MovingElements from "./MovingElements";
import Wrapper from "./Wrapper";
//styles
import { breakpoints, MaxWidth, FlexWrapper, Section } from "styles/customs";

const HomePage = () => {
	return (
		<SHomePage id="home-page">
			<Div100vh>
				<MaxWidth>
					<SFlexWrapper
						direction="column-reverse"
						justify="flex-start"
						align="center"
					>
						<Wrapper />
						<MovingElements />
					</SFlexWrapper>
				</MaxWidth>
			</Div100vh>
		</SHomePage>
	);
};

export default HomePage;

const SHomePage = styled(Section)`
	background: var(--bg-col);
`;

const SFlexWrapper = styled(FlexWrapper)`
	@media ${breakpoints.tablet} {
		align-items: center;
	}

	@media ${breakpoints.desktop} {
		flex-direction: row;
	}
`;

const StyledHomePage = styled.div`
	/* position: relative; */
	/* min-height: 100vh; */
	background: var(--bg-col);

	padding: var(--vertical-gap) var(--horizontal-gap);
`;
