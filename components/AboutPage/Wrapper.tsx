//components
import InnerContainer from "./InnerContainer";
//styles
import styled from "styled-components";

const Wrapper = () => {
	return (
		<StyledWrapper>
			<InnerContainer />
			<StyledPlaceholder />
		</StyledWrapper>
	);
};

export default Wrapper;

const StyledWrapper = styled.div`
	position: relative;
	width: 100%;
	z-index: 2;
`;

const StyledPlaceholder = styled.div`
	position: absolute;
	height: 50%;
	width: 100%;
	bottom: 0;
	background-color: var(--fourth-col);
	z-index: 1;
`;
