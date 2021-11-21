//libs
import { useCallback } from "react";
import styled from "styled-components";
import { breakpoints } from "@/styledComponents/index";

interface Props {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Burger = ({ open, setOpen }: Props) => {
	console.log("burger");

	const handleOpen = useCallback(() => {
		setOpen(!open);
	}, [open]);

	return (
		<StyledBurger onClick={handleOpen}>
			<p></p>
			<p></p>
			<p></p>
		</StyledBurger>
	);
};

export default Burger;

const StyledBurger = styled.div`
	height: 2.5rem;
	width: 3.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 2rem var(--horizontal-gap) 2rem auto;
	cursor: pointer;
	z-index: 11;
	border: 1px solid red;

	p {
		height: 0.4rem;
		width: 100%;
		background-color: var(--first-col);
	}

	@media ${breakpoints.desktop} {
		margin: 4rem var(--horizontal-gap) 4rem auto;
	}
`;
