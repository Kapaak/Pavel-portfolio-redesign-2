//libs
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const Logo = () => {
	return <StyledLogo onClick={() => scroll.scrollToTop()}>PZ</StyledLogo>;
};

export default Logo;

const StyledLogo = styled.div`
	font-size: var(--fosi-nav);
	margin-left: var(--horizontal-gap);
	z-index: 10;
	cursor: pointer;
`;
