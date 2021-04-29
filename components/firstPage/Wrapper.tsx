//libs
import styled from "styled-components";
//components
import InnerContainer from "./InnerContainer";

const Wrapper = () => {
	return (
		<StyledWrapper>
			<InnerContainer />
		</StyledWrapper>
	);
};

export default Wrapper;

const StyledWrapper = styled.div`
	display: flex;
`;
