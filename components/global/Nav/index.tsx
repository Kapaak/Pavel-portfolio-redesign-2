//libs
import styled from "styled-components";
//components
import Burger from "./Burger";
import ListItems from "./ListItems";
import Logo from "./Logo";
//styles

const index = () => {
	return (
		<StyledNav>
			<Logo />
			{/*todo breakpoints*/}
			<ListItems />
			<Burger />
		</StyledNav>
	);
};

export default index;

const StyledNav = styled.nav`
	display: flex;
	background-color: transparent;
	align-items: center;
	position: fixed;
	width: 100%;
`;
