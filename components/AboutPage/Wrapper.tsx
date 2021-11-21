//components
import InnerContainer from "./InnerContainer";
//styles
import styled from "styled-components";

const Wrapper = () => {
	return (
		<StyledWrapper>
			<InnerContainer />
		</StyledWrapper>
	);
};

export default Wrapper;

const StyledWrapper = styled.div`
	position: relative;
	width: 100%;
	z-index: 2;
`;
