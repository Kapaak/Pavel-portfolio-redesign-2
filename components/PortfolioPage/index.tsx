// libs
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//components
import Wrapper from "./Wrapper";
import Button from "../global/Button";
//interfaces
import { PortfolioObject } from "../global/Interfaces";
//breakpoints
import Breakpoints from "../global/Breakpoints";

interface Props {
	data: Array<PortfolioObject>;
}

const index = ({ data }: Props) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "0px 0px -300px 0px",
	});

	const portfolioV = {
		inactive: {
			x: -20,
			opacity: 0,
		},
		active: {
			x: 0,
			opacity: 1,
		},
	};

	const rootV = {
		active: {
			// color: "red",
			transition: {
				duration: 0.5,
				when: "beforeChildren",
				staggerChildren: 0.3,
			},
		},
		inactive: {
			// color: "black",
		},
	};

	return (
		<StyledPortfolioPageOutter>
			<StyledPortfolioPage
				ref={ref}
				initial={false}
				animate={inView ? "active" : "inactive"}
				variants={rootV}
			>
				<motion.h1 variants={portfolioV}>Portfolio</motion.h1>
				<motion.h2 variants={portfolioV}>some of my latest projects</motion.h2>
				{data.map((dataEl, index) => (
					<Wrapper key={index} data={dataEl} index={index} />
				))}
				<Button>load more projects...</Button>
			</StyledPortfolioPage>
		</StyledPortfolioPageOutter>
	);
};

export default index;

const StyledPortfolioPage = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	max-width: 144rem;
	margin: 0 auto;
	overflow: hidden;

	& > button {
		font-size: var(--fosi-subheadline);
	}
	@media ${Breakpoints.tablet} {
		padding: 0 var(--horizontal-gap);
		& > h2 {
			margin-bottom: 8rem;
		}

		& > button {
			align-self: center;
		}
	}
	@media ${Breakpoints.desktop} {
		& > h2 {
			margin-bottom: 18rem;
		}
	}
`;
const StyledPortfolioPageOutter = styled.div`
	padding: var(--vertical-gap) var(--horizontal-gap);
	background-color: var(--fourth-col);
`;
