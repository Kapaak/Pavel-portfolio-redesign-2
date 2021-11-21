import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

export const MainSubHeadline = ({ children }: Props) => {
	return <StyledMainSubhHeadline>{children}</StyledMainSubhHeadline>;
};

const StyledMainSubhHeadline = styled.h2`
	color: var(--first-col);
	font-size: var(--fosi-home-subheadline);
	font-weight: var(--fowe-bold);
	text-align: center;
`;
