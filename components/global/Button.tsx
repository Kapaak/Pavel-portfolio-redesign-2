//libs
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Breakpoints from "./Breakpoints";
import { motion } from "framer-motion";
//variants
import { ButtonUnderscoreVariant } from "../../animations/variants";

interface Props {
	children: React.ReactNode;
	noUnderscore?: boolean;
	onClick?: () => void;
}

const Button = ({ children, noUnderscore, onClick }: Props) => {
	const { underlineV, textV } = ButtonUnderscoreVariant;
	const containerRef = useRef(null);
	const [value, setValue] = useState<any>();
	useEffect(() => {
		setValue(containerRef.current);
		window.addEventListener("resize", async () => {
			await setValue(containerRef.current);
			await console.log(value);
		});
	}, []);

	const handleClick = () => {
		if (onClick) onClick();
	};

	return noUnderscore ? (
		<StyledButtonWithoutUndersore onClick={handleClick}>
			{children}
		</StyledButtonWithoutUndersore>
	) : (
		<StyledButton whileHover="visible">
			<StyledP ref={containerRef} variants={textV}>
				{children}
			</StyledP>
			<StyledUnderline variants={underlineV(value?.clientHeight / 2)} />
		</StyledButton>
	);
};

export default Button;

const StyledP = styled(motion.p)<{ variants: any }>``;

const StyledButtonWithoutUndersore = styled(motion.button)`
	position: relative;
	border: none;
	padding: 1rem 1rem 1rem 0;
	margin-bottom: var(--text-mb);
	font-size: var(--fosi-button);
	background-color: transparent;
	cursor: pointer;
	z-index: 1;
	letter-spacing: var(--letter-spacing);
	line-height: var(--line-height);
	overflow: hidden;

	&:first-child {
		margin-right: 2rem;
	}

	@media ${Breakpoints.desktopB} {
		margin-bottom: 6rem;
	}
`;

const StyledButton = styled(StyledButtonWithoutUndersore)``;

const StyledUnderline = styled(motion.p)<{ variants: any }>`
	position: absolute;
	width: calc(100% - 1rem);
	height: 0.3rem;
	background-color: var(--first-col);
	transform: translateY(-50%);
`;
