import styled from "styled-components";
import { breakpoints } from ".";

export const Line = styled.div`
	background-color: var(--col1);
	width: 30rem;
	height: 0.3rem;
	margin: 0 auto;

	@media ${breakpoints.tablet} {
		width: 38rem;
	}

	@media ${breakpoints.desktop} {
		margin: 0;
	}
`;
