// libs
import { useState } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//components
import Wrapper from "./Wrapper";
import { Button } from "@/styledComponents/index";
//interfaces
import { PortfolioObject } from "../../interfaces";
//breakpoints
import { breakpoints } from "@/styledComponents/index";
//variants
import { portfolioVariants } from "@/animations/variants";

interface Props {
	data: Array<PortfolioObject>;
}

const index = ({ data }: Props) => {
	const [loadImages, setLoadImages] = useState(2);
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "0px 0px -300px 0px",
	});
	const { rootV, nodeV } = portfolioVariants;

	const handleClick = () => {
		data.length > +loadImages ? setLoadImages(prev => prev + 2) : null;
	};

	return (
		<StyledPortfolioPageOutter id="portfolio-page">
			<StyledPortfolioPage
				ref={ref}
				initial={false}
				animate={inView ? "active" : "inactive"}
				variants={rootV}
			>
				<motion.h1 variants={nodeV}>Portfolio</motion.h1>
				<motion.h2 variants={nodeV}>some of my latest projects</motion.h2>
				{data.map((dataEl, index) => {
					if (+loadImages > +index)
						return <Wrapper key={index} data={dataEl} index={index} />;
				})}

				{+loadImages <= data.length ? (
					<Button onClick={handleClick}>load more projects...</Button>
				) : null}
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
	@media ${breakpoints.tablet} {
		padding: 0 var(--horizontal-gap);
		& > h2 {
			margin-bottom: 8rem;
		}

		& > button {
			align-self: center;
		}
	}
	@media ${breakpoints.desktop} {
		& > h2 {
			margin-bottom: 18rem;
		}
	}
`;
const StyledPortfolioPageOutter = styled.div`
	padding: var(--vertical-gap) var(--horizontal-gap);
	background-color: var(--fourth-col);
`;
