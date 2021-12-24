//libs
import { useState } from "react";
import styled from "styled-components";
import { breakpoints } from "@/customs/index";
//components
import Burger from "./Burger";
import ListItems from "./ListItems";
import ListItemsDesktop from "./ListItemsDesktop";
import Logo from "./Logo";
//styles

const Navigation = () => {
	const [open, setOpen] = useState(false);
	return (
		<StyledNav>
			<WrapperDiv>
				<Logo open={open} />
				<ListItems open={open} setOpen={setOpen} />
				<ListItemsDesktop />
				<Burger open={open} setOpen={setOpen} />
			</WrapperDiv>
		</StyledNav>
	);
};

export default Navigation;

const WrapperDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 150rem;
	margin: auto;

	@media ${breakpoints.desktop} {
		padding: 2rem 1rem;
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

	background-color: #f2f1ee85;
	backdrop-filter: blur(8px);
`;
