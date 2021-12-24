import styled from "styled-components";
import { breakpoints } from ".";

export const Line = styled.div`
	background-color: var(--col1);
	width: 30rem;
	height: 0.3rem;
	margin: 0 auto;
	max-width:100%;

	@media ${breakpoints.tablet} {
		width: 38rem;
	}

	@media ${breakpoints.desktop} {
		margin: 0;
	}

	@media ${breakpoints.desktopX} {
		width: 44.5rem;
	}
`;
