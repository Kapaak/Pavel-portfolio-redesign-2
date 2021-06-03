//libs
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Media from "react-media";
//components
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
import { aboutVariants, arcAnimationVariant2 } from "@/animations/variants";
import { arcAnimationVariant } from "@/animations/variants";
//breakpoints
import Breakpoints from "../global/Breakpoints";
//icons
import { ArcIcon } from "../../icons";

const InnerContainer = () => {
	const { rootV, nodeV } = aboutVariants;
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "0px 0px -300px 0px",
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
					<Media
						query={Breakpoints.desktop}
						defaultMatches={true}
						render={() => (
							<>
								<ArcIcon
									StyledWrapper={StyledIcon}
									stroke={{ width: 1, color: "var(--second-col)" }}
									animationVariant={arcAnimationVariant}
								/>
								<ArcIcon
									StyledWrapper={StyledIcon}
									stroke={{ width: 0.3, color: "var(--second-col)" }}
									animationVariant={arcAnimationVariant2}
								/>
							</>
						)}
					/>
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
	flex-direction: column-reverse;

	@media ${Breakpoints.desktop} {
		flex-direction: row;
	}

	@media ${Breakpoints.desktopB} {
		max-width: 140rem;
		margin: 0 auto;
	}
`;
const StyledIcon = styled(motion.svg)`
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0.3;
`;
