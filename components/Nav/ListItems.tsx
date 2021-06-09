//libs
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
//styles
import Breakpoints from "../global/Breakpoints";
import { listItemsVariants } from "@/animations/variants";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// const navigatV = {
// 	inactive: {
// 		opacity: 0,
// 		height: "0vh",
// 		transition: {
// 			when: "afterChildren",
// 			staggerChildren: 0.2,
// 		},
// 	},
// 	active: {
// 		opacity: 1,
// 		height: "100vh",
// 		transition: {
// 			staggerChildren: 0.2,
// 			duration: 0.3,
// 			when: "beforeChildren",
// 		},
// 	},
// };

// const nodeV = {
// 	inactive: {
// 		opacity: 0,
// 		x: 200,
// 		transitionEnd: {
// 			pointerEvents: "none",
// 		},
// 	},
// 	active: {
// 		opacity: 1,
// 		x: 0,
// 		transition: {
// 			stiffness: 1,
// 			type: "tween",
// 		},
// 	},
// };

const ListItems = ({ open, setOpen }: Props) => {
	const { rootV, nodeV } = listItemsVariants;
	const clickHandler = () => {
		setOpen(false);
	};
	return (
		<StyledListItems
			initial="inactive"
			animate={open ? "active" : "inactive"}
			variants={rootV}
			open={open}
		>
			<StyledListItem variants={nodeV}>
				<ScrollLink to="home-page" smooth={true} onClick={clickHandler}>
					Home
				</ScrollLink>
			</StyledListItem>
			<StyledListItem variants={nodeV}>
				<ScrollLink to="about-page" smooth={true} onClick={clickHandler}>
					About
				</ScrollLink>
			</StyledListItem>
			<StyledListItem variants={nodeV}>
				<ScrollLink to="portfolio-page" smooth={true} onClick={clickHandler}>
					Portfolio
				</ScrollLink>
			</StyledListItem>
			<StyledListItem variants={nodeV}>
				<ScrollLink to="contact-page" smooth={true} onClick={clickHandler}>
					Contact
				</ScrollLink>
			</StyledListItem>
		</StyledListItems>
	);
};

export default ListItems;

const StyledListItem = styled(motion.li)<any>`
	text-decoration: none;
	list-style: none;
	padding: 0 2rem;
	margin-bottom: var(--text-mb);
	font-size: var(--fosi-nav);
	cursor: pointer;

	@media ${Breakpoints.tablet} {
		padding: 0 4rem;
	}
`;

const StyledListItems = styled(motion.ul)<{ open: boolean }>`
	/* display: none; */
	display: flex;
	position: absolute;
	/* display: ${({ open }) => (open ? "flex" : "none")}; */
	flex-direction: column;
	justify-content: center;
	top: 0;
	right: 0;
	z-index: 9;

	width: 50%;
	height: 100vh;
	background-color: var(--second-col);

	@media ${Breakpoints.tablet} {
		width: 33%;
	}

	/* @media ${Breakpoints.tablet} {
		display: block;
	}
	@media ${Breakpoints.desktop} {
		display: flex;
	} */
`;
