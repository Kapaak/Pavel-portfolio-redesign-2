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
			display: "none",
			transition: { duration: 1, when: "afterChildren" },
			width: "90vw",
			height: "90vh",
		},
		active: {
			display: "flex",
			transition: { duration: 1, when: "beforeChildren" },
			width: "100vw",
			height: "100vh",
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
			<p
				style={{
					position: "absolute",
					left: "10rem",
					bottom: "10rem",
					color: "var(--fourth-col)",
				}}
			>
				loading...
			</p>
		</StyledLoadingWrapper>
	);
};

const StyledLoadingWrapper = styled(motion.div)`
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 80vw;
	height: 80vh;
	background-color: var(--first-col);
	z-index: 11;

	h1 {
		color: var(--fourth-col);
	}
`;

export default index;
