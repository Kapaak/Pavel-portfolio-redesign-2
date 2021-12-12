//libs
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

interface Props {
	open: boolean;
}

const Logo = ({ open }: Props) => {
	return (
		<StyledLogo open={open} onClick={() => scroll.scrollToTop()}>
			portfolio
		</StyledLogo>
	);
};

export default Logo;

const StyledLogo = styled.div<{ open: boolean }>`
	position: relative;
	font-size: 2.5rem;
	font-weight: var(--fowe-bold);
	margin-left: var(--horizontal-gap);
	z-index: 10;
	color: ${({ open }) => (open ? "var(--col2)" : "var(--col1)")};
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0.15rem;
		width: 1rem;
		height: 0.25rem;
		background-color: ${({ open }) => (open ? "var(--col2)" : "var(--col1)")};
	}
`;
