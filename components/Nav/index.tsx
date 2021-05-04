//libs
import { useState } from "react";
import styled from "styled-components";
//components
import Burger from "./Burger";
import ListItems from "./ListItems";
import Logo from "./Logo";
//styles

const index = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledNav>
			<Logo />
			<ListItems open={open} setOpen={setOpen} />
			<Burger open={open} setOpen={setOpen} />
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
	z-index: 10;
`;
