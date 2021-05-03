//components
import Wrapper from "./Wrapper";
//styles
import styled from "styled-components";

const index = () => {
	return (
		<StyledContactPage>
			<Wrapper />
		</StyledContactPage>
	);
};

export default index;

const StyledContactPage = styled.div`
	position: relative;
	display: flex;
	background-color: var(--fourth-col);
	/* height: 30rem; */
	border: 1px solid red;
`;
