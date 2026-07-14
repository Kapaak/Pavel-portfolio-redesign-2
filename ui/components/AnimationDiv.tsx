import { motion, MotionProps } from "framer-motion";

interface Props {
	children: React.ReactNode;
	custom?: number;
	variants: MotionProps["variants"];
}

export const AnimationDiv = ({ children, ...rest }: Props) => {
	return (
		<motion.div {...rest} initial="hidden" animate="visible">
			{children}
		</motion.div>
	);
};
