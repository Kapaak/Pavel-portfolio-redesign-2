//components
import Wrapper from "./Wrapper";
//styles
import styled from "styled-components";

const index = () => {
	return (
		<StyledFirstPage>
			<Wrapper />
		</StyledFirstPage>
	);
};

export default index;

const StyledFirstPage = styled.div`
	position: relative;
	min-height: 100vh;
	width: 100vw;
	background: rgb(232, 231, 231);
	background: linear-gradient(
		90deg,
		rgba(232, 231, 231, 1) 0%,
		rgba(246, 246, 246, 1) 100%
	);

	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: var(--vertical-gap) var(--horizontal-gap);
`;
