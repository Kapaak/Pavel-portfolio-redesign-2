//libs
import styled from "styled-components";
//styles
import { Breakpoints } from "../../../styles/GlobalStyles";

const ListItems = () => {
	return (
		<StyledListItems>
			<li>Home</li>
			<li>About</li>
			<li>Portfolio</li>
			<li>Contact</li>
		</StyledListItems>
	);
};

export default ListItems;

const StyledListItems = styled.ul`
	/* display: none; */
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9;
	li {
		text-decoration: none;
		list-style: none;
	}

	width: 100vw;
	height: 100vh;
	background-color: red;

	/* @media ${Breakpoints.tablet} {
		display: block;
	}
	@media ${Breakpoints.desktop} {
		display: flex;
	} */
`;
