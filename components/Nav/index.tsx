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
			{open ? <FullPageDiv onClick={() => setOpen(prev => !prev)} /> : null}
		</StyledNav>
	);
};

export default index;

const FullPageDiv = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 2;
`;

const StyledNav = styled.nav`
	position: relative;
	display: flex;
	background-color: transparent;
	align-items: center;
	position: fixed;
	width: 100%;
	z-index: 10;
`;
