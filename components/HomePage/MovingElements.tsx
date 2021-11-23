//libraries
import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
//icons
import ReactIcon from "../../public/icons/react.svg";
import GithubIcon from "../../public/icons/github.svg";
import TypescriptIcon from "../../public/icons/typescript.svg";
import NextjsIcon from "../../public/icons/nextjs.svg";
import SvelteIcon from "../../public/icons/svelte.svg";
import SanityIcon from "../../public/icons/sanity.svg";

const MovingElements = () => {
	return (
		<StyledMovingElements>
			<h1 style={{ textAlign: "center" }}>moving elements</h1>
			<InnerWrapper>
				<MovingElement
					top={10}
					left={40}
					animate={{
						x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
						y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Image src={GithubIcon} />
					<p>github</p>
				</MovingElement>
				<MovingElement
					top={15}
					left={15}
					animate={{
						x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
						y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Image src={NextjsIcon} />
					<p>next.js</p>
				</MovingElement>
				<MovingElement
					top={40}
					left={10}
					animate={{
						x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
						y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Image src={ReactIcon} />
					<p>react</p>
				</MovingElement>
				<MovingElement
					top={55}
					left={35}
					animate={{
						x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
						y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Image src={TypescriptIcon} />
					<p>typescript</p>
				</MovingElement>
				<MovingElement
					top={65}
					left={65}
					animate={{
						x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
						y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Image src={SvelteIcon} />
					<p>svelte</p>
				</MovingElement>

				<MovingElement
					top={35}
					left={35}
					animate={{
						x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
						y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
					}}
					transition={{ repeat: Infinity, duration: 4 }}
				>
					<Image src={SanityIcon} />
					<p>sanity.io</p>
				</MovingElement>
			</InnerWrapper>
		</StyledMovingElements>
	);
};

const getRandomNumber = (min = 0, max = 0) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const randomNumber = Math.random() * (max - min + 1) + min;

	return Math.ceil(randomNumber);
};

const MovingElement = styled(motion.div)<{ top: number; left: number }>`
	position: absolute;
	display: flex;
	top: ${({ top }) => (top ? `${top}%` : "0")};
	left: ${({ left }) => (left ? `${left}%` : "0")};

	padding: 2rem;
	border: 1px solid var(--col1);
	border-radius: 50%;

	p {
		position: absolute;
		bottom: 0;
		left: 50%;
		background-color: var(--col1);
		color: var(--bg-col);
		padding: 0.3rem 0.6rem;
		border-radius: 0.5rem;
		transform: translate(-50%, 20%);
		font-size: 1.4rem;
	}
`;

const InnerWrapper = styled.div`
	position: relative;
	border: 1px solid red;
	height: 100%;
`;

const StyledMovingElements = styled.div`
	width: 100%;
	height: 60rem;
	border: 1px solid black;
`;

export default MovingElements;
