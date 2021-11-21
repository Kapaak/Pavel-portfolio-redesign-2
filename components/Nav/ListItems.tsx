//libs
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
//styles
import { breakpoints } from "@/styledComponents/index";
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

	@media ${breakpoints.tablet} {
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

	@media ${breakpoints.tablet} {
		width: 33%;
	}

	/* @media ${breakpoints.tablet} {
		display: block;
	}
	@media ${breakpoints.desktop} {
		display: flex;
	} */
`;
