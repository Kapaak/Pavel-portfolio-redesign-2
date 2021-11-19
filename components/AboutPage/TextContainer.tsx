//libs
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
//styles
import { breakpoints } from "@/styledComponents/index";
import { Highlight } from "../../styles/GlobalStyles";

const TextContainer = () => {
	const AboutTextV = {
		active: { x: 0, opacity: 1 },
		inactive: { x: 20, opacity: 0 },
	};

	return (
		<StyledTextContainer>
			<motion.h1 variants={AboutTextV}>About</motion.h1>
			<motion.p variants={AboutTextV}>
				Hi, I'm <Highlight>Pavel Zapletal</Highlight> a self-taught JavaScript
				programmer. I'm 26 yo, living in Brno. Creating websites is my bread and
				butter. When I'm not at home I usually go outside to enjoy some nature.
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

	@media ${breakpoints.desktop} {
		margin: auto 0;
		padding-right: 7vw;
	}

	@media ${breakpoints.desktopB} {
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

	@media ${breakpoints.tablet} {
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
