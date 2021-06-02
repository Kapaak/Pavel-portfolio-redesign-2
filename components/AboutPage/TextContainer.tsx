//libs
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
//styles
import Breakpoints from "../global/Breakpoints";
//icons
import { ArcIcon } from "../../icons";
import { arcAnimationVariant2 } from "@/animations/variants";

const TextContainer = () => {
	const AboutTextV = {
		active: { x: 0, opacity: 1 },
		inactive: { x: 20, opacity: 0 },
	};

	// const SunIcon = () => {
	// 	return (
	// 		<StyledIcon
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			fill="none"
	// 			viewBox="0 0 512 512"
	// 		>
	// 			<motion.path
	// 				initial={{ rotate: -45, pathLength: 0 }}
	// 				animate={{ rotate: 0, pathLength: 1 }}
	// 				transition={{ duration: 2.5 }}
	// 				stroke="var(--second-col)"
	// 				strokeWidth={0.3}
	// 				d="
	// 				M 100, 100
	// 				m -75, 0
	// 				a 75,75 0 1,0 150,0
	// 				a 75,75 0 1,0 -150,0
	// 				"
	// 			/>
	// 		</StyledIcon>
	// 	);
	// };
	return (
		<StyledTextContainer>
			<div>
				{/* <SunIcon /> */}
				{/* <ArcIcon
					StyledWrapper={StyledIcon}
					stroke={{ width: 0.3, color: "var(--second-col)" }}
					animationVariant={arcAnimationVariant2}
				/> */}
				<motion.h1 variants={AboutTextV}>About</motion.h1>
			</div>
			<motion.p variants={AboutTextV}>
				Hi, I'm{" "}
				<motion.span
					style={{ display: "inline-block", position: "relative" }}
					animate={{ color: "var(--second-col)" }}
				>
					Pavel Zapletal
				</motion.span>{" "}
				a self-taught JavaScript programmer. I'm 26 yo, living in Brno. Creating
				websites is my bread and butter. When I'm not at home I usually go
				outside to enjoy some nature.
			</motion.p>
			<motion.div variants={AboutTextV}>
				<h2>What technologies do I like working with?</h2>
				<NotReallySlider>
					<div>
						<Image
							width={35}
							height={35}
							alt="nextjs-svg"
							src="/images/icons/nextjs.svg"
						/>
						<p>Next.js</p>
					</div>
					<div>
						<Image
							width={35}
							height={35}
							src="/images/icons/github.svg"
							alt="github-svg"
						/>
						<p>Github</p>
					</div>
					<div>
						<Image
							width={35}
							height={35}
							src="/images/icons/react.svg"
							alt="react-svg"
						/>
						<p>React</p>
					</div>
					<div>
						<Image
							width={35}
							height={35}
							src="/images/icons/typescript.svg"
							alt="typescript-svg"
						/>
						<p>Typescript</p>
					</div>
				</NotReallySlider>
			</motion.div>
		</StyledTextContainer>
	);
};

export default TextContainer;

const StyledTextContainer = styled.div`
	flex: 1 1 70%;
	margin-bottom: var(--horizontal-gap);
	z-index: 2;

	& > p {
		margin-bottom: var(--text-mb);
	}

	p {
		font-size: var(--fosi-text);
	}

	@media ${Breakpoints.desktop} {
		margin: auto 0;
		padding-right: 7vw;
	}

	@media ${Breakpoints.desktopB} {
		flex: 1 1 60%;
		padding-right: 11vw;
	}
`;

const NotReallySlider = styled.div`
	display: flex;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;

		& > div {
			margin-bottom: 0.5rem;
		}
	}

	div + div {
		margin-left: var(--text-mb);
	}

	@media ${Breakpoints.tablet} {
		div + div {
			margin-left: 2rem;
		}
		& > div {
			flex-direction: row;

			p {
				margin-left: 1rem;
				margin-bottom: 0;
			}
		}
	}
`;

const StyledIcon = styled(motion.svg)`
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0.15;
`;
