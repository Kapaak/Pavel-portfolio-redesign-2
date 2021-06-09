//libs
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const index = () => {
	const [delay, setDelay] = useState(true);
	const timerId = () => {
		setTimeout(() => {
			setDelay(false);
		}, 3000);
	};
	useEffect(() => {
		timerId();
		//@ts-ignore
		return clearTimeout(timerId);
	}, []);

	const rootV = {
		inactive: {
			width: "0vw",
			transition: { duration: 1, when: "afterChildren" },
		},
		active: {
			width: "100vw",
			transition: { duration: 1, when: "beforeChildren" },
		},
	};

	const nodeV = {
		inactive: {
			opacity: 0,
			y: -50,
		},
		active: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<StyledLoadingWrapper
			initial="inactive"
			animate={delay ? "active" : "inactive"}
			variants={rootV}
		>
			<motion.h1 variants={nodeV}>Pavel Zapletal</motion.h1>
		</StyledLoadingWrapper>
	);
};

const StyledLoadingWrapper = styled(motion.div)`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	width: 0vw;
	height: 100vh;
	background-color: var(--first-col);
	z-index: 11;

	h1 {
		color: var(--fourth-col);
	}
`;

export default index;
