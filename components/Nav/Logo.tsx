//libs
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
	return (
		<StyledLogo onClick={() => scroll.scrollToTop()}>portfolio</StyledLogo>
	);
};

export default Logo;

const StyledLogo = styled.div`
	position: relative;
	font-size: 2.5rem;
	font-weight: var(--fowe-bold);
	margin-left: var(--horizontal-gap);
	z-index: 10;
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0.15rem;
		width: 1rem;
		height: 0.25rem;
		background-color: var(--col1);
	}
`;
