import { motion } from "framer-motion";

interface Props {
	children: React.ReactNode;
}

export const AnimationRevealDiv = ({ children }: Props) => {
	return (
		<motion.div
			//@ts-ignore
			whileInView="visible"
			viewport={{ once: true, margin: "-80px" }}
			initial="hidden"
			transition={{ duration: 0.5 }}
			variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
		>
			{children}
		</motion.div>
	);
};
