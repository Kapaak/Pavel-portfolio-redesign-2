import styled from "styled-components";
import { breakpoints } from ".";

interface Props {
	children: React.ReactNode;
}

export const MainHeadline = ({ children }: Props) => {
	return <StyledMainhHeadline>{children}</StyledMainhHeadline>;
};

const StyledMainhHeadline = styled.h1`
	color: var(--first-col);
	font-size: var(--f-mhl);
	font-weight: var(--fowe-bold);
	text-align: center;
	margin-bottom: var(--headline-mb);

	@media ${breakpoints.desktop} {
		text-align: left;
	}
`;
