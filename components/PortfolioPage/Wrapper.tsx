//libs
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//components
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";
//interfaces
import { PortfolioObject } from "../global/Interfaces";
//breakpoints
import Breakpoints from "../global/Breakpoints";
//variants
import { portfolioVariants } from "@/animations/variants";
//icons
import { ArcIconStatic } from "icons";

interface Props {
	data: PortfolioObject;
	index: number;
}

const Wrapper = ({ data, index }: Props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "0px 0px -300px 0px",
	});
	const { image, ...rest } = data;
	const { portfolioNodeLeft, portfolioNodeRight } = portfolioVariants;

	const staticV = {
		active: {
			opacity: 0.3,
			transition: { duration: 0.5, delay: 0.5 },
		},
		inactive: {
			opacity: 0,
		},
	};

	return (
		<>
			{index % 2 === 0 ? (
				<StyledWrapper
					ref={ref}
					animate={inView ? "active" : "inactive"}
					variants={portfolioNodeLeft}
					index={index}
				>
					<div>
						<ImageContainer image={image} />
						<TextContainer
							data={rest}
							margin="var(--horizontal-gap) 0 0 5vw;"
						/>
					</div>
					<ArcIconStatic
						StyledWrapper={StyledIconLeft}
						size={200}
						variants={staticV}
					/>
					<ArcIconStatic
						StyledWrapper={StyledIconRightSmall}
						size={100}
						fill="#cccccc8c"
						color="none"
						variants={staticV}
					/>
					<ArcIconStatic
						StyledWrapper={StyledIconRightSmall}
						size={50}
						fill="#cccccc8c"
						color="none"
						variants={staticV}
					/>
				</StyledWrapper>
			) : (
				<StyledWrapper
					ref={ref}
					animate={inView ? "active" : "inactive"}
					variants={portfolioNodeRight}
					index={index}
				>
					<div>
						<ImageContainer image={image} />
						<TextContainer
							data={rest}
							margin="var(--horizontal-gap) 5vw 0 0 ;"
						/>
					</div>

					<ArcIconStatic
						StyledWrapper={StyledIconRight}
						size={200}
						fill="#cccccc8c"
						color="none"
						variants={staticV}
					/>
					<ArcIconStatic
						StyledWrapper={StyledIconLeftSmall}
						size={100}
						fill="#cccccc8c"
						color="none"
						variants={staticV}
					/>
					<ArcIconStatic
						StyledWrapper={StyledIconLeftSmall}
						size={50}
						variants={staticV}
					/>
				</StyledWrapper>
			)}
		</>
	);
};

export default Wrapper;

const IconAncestor = styled(motion.svg)<any>`
	display: none;
	position: absolute;
	opacity: 0.5;
	transform: translateY(-40%);

	@media ${Breakpoints.desktop} {
		display: block;
	}
`;

const StyledIconLeft = styled(IconAncestor)`
	left: 0;
	top: ${({ randomNumber }) => randomNumber}%;
`;
const StyledIconRight = styled(IconAncestor)<any>`
	right: 0;
	bottom: ${({ randomNumber }) => randomNumber}%;
`;

const StyledIconRightSmall = styled(StyledIconRight)`
	right: ${({ randomNumber }) => randomNumber}%;
`;
const StyledIconLeftSmall = styled(StyledIconRight)`
	left: ${({ randomNumber }) => randomNumber}%;
`;

const StyledWrapper = styled(motion.div)<{ index: number }>`
	width: 100%;
	margin-bottom: var(--horizontal-gap);
	position: relative;

	& > div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 79rem;
		margin: 0 auto;

		@media ${Breakpoints.tablet} {
			flex-direction: ${({ index }) =>
				index % 2 === 0 ? "row" : "row-reverse"};
		}
		@media ${Breakpoints.desktopB} {
			max-width: 100rem;
		}
	}

	@media ${Breakpoints.desktop} {
		margin-bottom: 14rem;
	}
`;
