import { AnimationProps, motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    custom?: number;
    variants: AnimationProps["variants"];
  }

export const AnimationDiv = ({ children, ...rest }: Props) => {
    return (
      <motion.div {...rest} initial="hidden" animate="visible">
        {children}
      </motion.div>
    );
  };
  

