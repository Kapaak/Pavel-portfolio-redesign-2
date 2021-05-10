//libs
import styled from "styled-components";
import Breakpoints from "../global/Breakpoints";

const ColorContainer = ({ color }: { color: string }) => {
	console.log("pep");

	return <StyledColor color={color} />;
};

export default ColorContainer;

const StyledColor = styled.div<{ color: string }>`
	width: 3rem;
	height: 3rem;
	background-color: ${({ color }) => color};
	border-radius: 50%;
	border: 1px solid var(--first-col);
	margin-right: 1rem;

	@media ${Breakpoints.desktopB} {
		width: 4.4rem;
		height: 4.4rem;
		border: 2px solid var(--first-col);
	}
`;
