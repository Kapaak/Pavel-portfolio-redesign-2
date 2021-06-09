//components
import Wrapper from "./Wrapper";
//styles
import styled from "styled-components";

const index = () => {
	return (
		<StyledContactPage id="contact-page">
			<Wrapper />
			<StyledPlaceholder />
		</StyledContactPage>
	);
};

export default index;

const StyledContactPage = styled.div`
	position: relative;
	display: flex;
	background-color: var(--fourth-col);
`;

const StyledPlaceholder = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30%;
	background-color: var(--first-col);
`;
