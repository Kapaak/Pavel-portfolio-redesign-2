//libs
import styled from "styled-components";

const Burger = () => {
	return (
		<StyledBurger>
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
	margin: 1rem var(--horizontal-gap) 1rem auto;
	z-index: 10;

	p {
		height: 0.4rem;
		width: 100%;
		background-color: var(--first-col);
	}
`;
