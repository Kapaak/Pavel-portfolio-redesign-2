import { motion } from "framer-motion";

export const ArcIcon = ({
	StyledWrapper,
	animationVariant,
	stroke,
	fill = "transparent",
}: any) => {
	return (
		<StyledWrapper
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 512 512"
		>
			<motion.path
				variants={animationVariant}
				stroke={stroke.color}
				strokeWidth={stroke.width}
				fill={fill}
				d="
            M 100, 100
            m -75, 0
            a 75,75 0 1,0 150,0
            a 75,75 0 1,0 -150,0
            "
			/>
		</StyledWrapper>
	);
};

const generateNumber = (max: number, min: number) => {
	return `${Math.floor(Math.random() * max) + min}px`;
};

export const ArcIconStatic = ({
	StyledWrapper,
	size,
	color = "var(--second-col)",
	fill = "none",
}: any) => {
	return (
		<StyledWrapper
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 500 500"
			randomNumber={generateNumber(10, 1)}
		>
			<g
				id="Ellipse_1"
				data-name="Ellipse 1"
				fill={fill}
				stroke=""
				strokeWidth="3"
			>
				<circle cx="249" cy="249" r="245" stroke={color} />
			</g>
		</StyledWrapper>
	);
};
