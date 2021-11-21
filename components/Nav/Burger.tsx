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
	position: relative;
	height: 4.2rem;
	width: 4.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 2rem var(--horizontal-gap) 2rem auto;
	cursor: pointer;
	z-index: 11;
	border-radius: 0.45rem;
	box-shadow: var(--shadow);
	padding: 1rem;
	z-index: 999;
	background-color: #f2f1eec7;

	p {
		height: 2.5px;
		width: 100%;
		background-color: var(--col1);
		margin: 0 auto;
	}

	@media ${breakpoints.desktop} {
		margin: 4rem var(--horizontal-gap) 4rem auto;
	}
`;
