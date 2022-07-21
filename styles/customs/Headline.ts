import styled from "styled-components";
import { breakpoints } from ".";

export const Headline = styled.h2<{ invertColors?: boolean }>`
	position: relative;
	color: ${({ invertColors }) =>
		invertColors ? "var(--bg-col)" : "var(--col1)"};
	font-size: var(--f-hl);
	font-weight: var(--fowe-bold);

	&::before {
		content: "";
		position: absolute;
		top: -0.8rem;
		left: 0;
		width: 1.5rem;
		height: 0.4rem;
		background-color: ${({ invertColors }) =>
			invertColors ? "var(--bg-col)" : "var(--col1)"};
	}

	@media ${breakpoints.tabletS} {
		margin-top: 1.5rem;
	}
`;
