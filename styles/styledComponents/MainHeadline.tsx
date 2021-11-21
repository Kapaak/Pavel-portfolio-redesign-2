import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

export const MainHeadline = ({ children }: Props) => {
	return <StyledMainhHeadline>{children}</StyledMainhHeadline>;
};

const StyledMainhHeadline = styled.h1`
	color: var(--first-col);
	font-size: var(--fosi-home-headline);
	font-weight: var(--fowe-bold);
`;
