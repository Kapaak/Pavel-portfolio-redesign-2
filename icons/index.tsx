import { motion } from "framer-motion";

export const Icon = ({ StyledC }: any) => {
	return <StyledC>mama</StyledC>;
};

export const ArcIcon = ({ StyledWrapper, animationVariant, stroke }: any) => {
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
