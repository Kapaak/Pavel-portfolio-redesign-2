//libs
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
//styles
import { breakpoints } from "styles/customs";
import { listItemsVariants } from "@/animations/variants";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
				<ScrollLink to="projects-page" smooth={true} onClick={clickHandler}>
					Projects
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
	padding: 0 4rem;
	margin-bottom: var(--text-mb);
	font-size: var(--fosi-nav);
	cursor: pointer;

	@media ${breakpoints.tablet} {
		padding: 0 4rem;
	}
`;

const StyledListItems = styled(motion.ul)<{ open: boolean }>`
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: center;
	top: 0;
	right: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--col1);
	color: var(--bg-col);
	font-weight: var(--fowe-bold);
	z-index: 998;
`;
