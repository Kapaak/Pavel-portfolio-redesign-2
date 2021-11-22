//libs
import { breakpoints } from "@/styledComponents/Breakpoints";
import { useState } from "react";
import styled from "styled-components";
//components
import Burger from "./Burger";
import ListItems from "./ListItems";
import ListItemsDesktop from "./ListItemsDesktop";
import Logo from "./Logo";
//styles

const index = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledNav>
			<WrapperDiv>
				<Logo />
				<ListItems open={open} setOpen={setOpen} />
				<ListItemsDesktop />
				<Burger open={open} setOpen={setOpen} />
				{open ? <FullPageDiv onClick={() => setOpen(prev => !prev)} /> : null}
			</WrapperDiv>
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
	z-index: 998;
`;

const WrapperDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 150rem;
	margin: auto;

	@media ${breakpoints.desktop} {
		padding: 1rem;
	}
`;

const StyledNav = styled.nav`
	position: relative;
	display: flex;
	background-color: transparent;
	align-items: center;
	position: fixed;
	width: 100%;
	z-index: 10;

	@media ${breakpoints.desktop} {
		background-color: #f2f1ee85;
		backdrop-filter: blur(8px);
	}
`;
