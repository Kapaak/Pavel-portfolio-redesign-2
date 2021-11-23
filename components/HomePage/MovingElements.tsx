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
			<MovingElement
				top={10}
				left={35}
				animate={{
					x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
					y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
				}}
				transition={{ repeat: Infinity, duration: 4 }}
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={1}
			>
				<Image src={GithubIcon} />
				<p>github</p>
			</MovingElement>
			<MovingElement
				top={40}
				left={40}
				animate={{
					x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
					y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
				}}
				transition={{ repeat: Infinity, duration: 4 }}
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={1}
			>
				<Image src={NextjsIcon} />
				<p>next.js</p>
			</MovingElement>
			<MovingElement
				top={55}
				left={60}
				animate={{
					x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
					y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
				}}
				transition={{ repeat: Infinity, duration: 4 }}
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={1}
			>
				<Image src={ReactIcon} />
				<p>react</p>
			</MovingElement>
			<MovingElement
				top={65}
				left={28}
				animate={{
					x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
					y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
				}}
				transition={{ repeat: Infinity, duration: 4 }}
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={1}
			>
				<Image src={TypescriptIcon} />
				<p>typescript</p>
			</MovingElement>
			<MovingElement
				top={25}
				left={12}
				animate={{
					x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
					y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
				}}
				transition={{ repeat: Infinity, duration: 4 }}
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={1}
			>
				<Image src={SvelteIcon} />
				<p>svelte</p>
			</MovingElement>

			<MovingElement
				top={25}
				left={65}
				animate={{
					x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
					y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
				}}
				transition={{ repeat: Infinity, duration: 4 }}
				drag
				dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
				dragElastic={1}
			>
				<Image src={SanityIcon} />
				<p>sanity.io</p>
			</MovingElement>
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
	border: 1px solid var(--bg-col);

	padding: 2rem;

	border-radius: 50%;

	img {
		pointer-events: none;
	}

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
		opacity: 0;
		transition: all 0.5s ease;
	}

	&:hover {
		border: 1px solid var(--col1);
		p {
			opacity: 1;
		}
	}
`;

const StyledMovingElements = styled.div`
	position: relative;
	width: 100%;
	height: 60rem;
	overflow: hidden;
	/* border: 1px solid black; */
`;

export default MovingElements;
