import styled from "styled-components";
import { breakpoints } from ".";

interface Props {
	children: React.ReactNode;
}

export const MainSubHeadline = ({ children }: Props) => {
	return <StyledMainSubhHeadline>{children}</StyledMainSubhHeadline>;
};

const StyledMainSubhHeadline = styled.h2`
	color: var(--first-col);
	font-size: var(--f-mshl);
	font-weight: var(--fowe-bold);
	text-align: center;
	margin-bottom: var(--text-mb);

	@media ${breakpoints.desktop} {
		text-align: left;
	}
`;
