//libs
import styled from "styled-components";
//styles
import Breakpoints from "../global/Breakpoints";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListItems = ({ open, setOpen }: Props) => {
	return (
		<StyledListItems open={open}>
			<li>Home</li>
			<li>About</li>
			<li>Portfolio</li>
			<li>Contact</li>
		</StyledListItems>
	);
};

export default ListItems;

const StyledListItems = styled.ul<{ open: boolean }>`
	display: none;
	position: absolute;
	display: ${({ open }) => (open ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	z-index: 9;

	li {
		text-decoration: none;
		list-style: none;
	}

	width: 100vw;
	height: 100vh;
	background-color: violet;

	/* @media ${Breakpoints.tablet} {
		display: block;
	}
	@media ${Breakpoints.desktop} {
		display: flex;
	} */
`;
