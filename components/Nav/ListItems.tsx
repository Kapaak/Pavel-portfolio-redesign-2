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
	top: 0;
	right: 0;
	z-index: 9;
	font-size: var(--fosi-nav);

	li {
		text-decoration: none;
		list-style: none;
	}

	width: 50%;
	height: 100vh;
	background-color: var(--second-col);

	/* @media ${Breakpoints.tablet} {
		display: block;
	}
	@media ${Breakpoints.desktop} {
		display: flex;
	} */
`;
