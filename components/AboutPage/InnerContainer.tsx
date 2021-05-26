//libs
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//components
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import { AboutVariants } from "@/animations/variants";
//breakpoints
import Breakpoints from "../global/Breakpoints";

const InnerContainer = () => {
	const { rootV, nodeV } = AboutVariants;
	const { ref, inView } = useInView({
		triggerOnce: true,
		// threshold: 0.4,
		rootMargin: "-200px",
	});

	return (
		<StyledInnerContainer>
			<StyledTextOutterWrapper
				ref={ref}
				initial={false}
				animate={inView ? "active" : "inactive"}
				variants={rootV}
			>
				<StyledTextWrapper variants={nodeV}>
					<TextContainer />
					<ImageContainer />
				</StyledTextWrapper>
			</StyledTextOutterWrapper>
		</StyledInnerContainer>
	);
};

export default InnerContainer;

const StyledInnerContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	background: rgba(232, 231, 231, 1);
`;
const StyledTextOutterWrapper = styled(motion.div)`
	position: relative;
	padding: var(--vertical-gap) var(--horizontal-gap) var(--horizontal-gap);
	background-color: var(--third-col);
	max-width: 165rem;
	width: 100%;
	z-index: 3;
	@media ${Breakpoints.tablet} {
		margin: 0 var(--horizontal-gap);
		border-radius: var(--br-main);
		padding: var(--vertical-gap) var(--horizontal-gap);
	}
`;

const StyledTextWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;

	@media ${Breakpoints.desktop} {
		flex-direction: row;
	}

	@media ${Breakpoints.desktopB} {
		max-width: 140rem;
		margin: 0 auto;
	}
`;
