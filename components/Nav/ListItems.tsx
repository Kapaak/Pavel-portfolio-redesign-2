//libs
import { motion } from "framer-motion";
import styled from "styled-components";
//styles
import Breakpoints from "../global/Breakpoints";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navigatV = {
	inactive: {
		opacity: 0,
		height: "0vh",
		transition: {
			when: "afterChildren",
			staggerChildren: 0.2,
		},
	},
	active: {
		opacity: 1,
		height: "100vh",
		transition: {
			staggerChildren: 0.2,
			duration: 0.3,
			when: "beforeChildren",
		},
	},
};

const nodeV = {
	inactive: {
		opacity: 0,
		x: 200,
		transitionEnd: {
			pointerEvents: "none",
		},
	},
	active: {
		opacity: 1,
		x: 0,
		transition: {
			stiffness: 1,
			type: "tween",
		},
	},
};

const ListItems = ({ open, setOpen }: Props) => {
	return (
		<StyledListItems
			initial="inactive"
			animate={open ? "active" : "inactive"}
			variants={navigatV}
			open={open}
		>
			<StyledListItem variants={nodeV}>Home</StyledListItem>
			<StyledListItem variants={nodeV}>About</StyledListItem>
			<StyledListItem variants={nodeV}>Portfolio</StyledListItem>
			<StyledListItem variants={nodeV}>Contact</StyledListItem>
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
