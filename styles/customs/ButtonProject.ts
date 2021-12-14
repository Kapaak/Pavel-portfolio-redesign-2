import styled from "styled-components";

type RangeType = 1 | 2;

export const ButtonProject = styled.button<{ variant?: RangeType }>`
	/* border: 1px solid var(--col1); */
	border: none;
	font-family: inherit;
	cursor: pointer;
	border-radius: 0.6rem;
	box-shadow: 0 0 20px rgba(8, 1, 1, 0.125);
	background-color: ${({ variant }) =>
		variant == 1 ? "var(--col1)" : "var(--bg-col)"};
	color: ${({ variant }) => (variant == 1 ? "var(--bg-col)" : "var(--col1)")};
	padding: 0.8rem 1.4rem;
	font-size: 1.6rem;
`;
