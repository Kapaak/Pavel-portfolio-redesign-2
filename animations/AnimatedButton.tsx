//libs
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//components
import Button from "../components/global/Button";
//variants
import { ButtonUnderscoreVariant } from "./variants";

interface Props {
	children: React.ReactNode;
	onClick?: () => void;
}

const AnimatedButton = ({ children, ...rest }: Props) => {
	const { underlineV, textV } = ButtonUnderscoreVariant;
	const componentRef = useRef(null);
	const [container, setContainer] = useState<any>();
	useEffect(() => {
		setContainer(componentRef.current);
		console.log("rere");
	}, [componentRef]);

	return (
		<div>
			<AnimatedComponent {...rest} whileHover={{ x: 20 }}>
				<StyledP ref={componentRef} variants={textV}>
					{children}
				</StyledP>
				<StyledUnderline variants={underlineV(container?.clientHeight / 2)} />
			</AnimatedComponent>
		</div>
	);
};

export default AnimatedButton;

const AnimatedComponent = styled(motion.Button)<{ whileHover?: any }>``;
const StyledP = styled(motion.p)<{ variants?: any }>``;

const StyledUnderline = styled(motion.p)<{ variants?: any }>`
	position: absolute;
	width: calc(100% - 1rem);
	height: 0.3rem;
	background-color: var(--first-col);
	transform: translateY(-50%);
`;
