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
	display: flex;
	flex-direction: column;
	width: 100%;
	& > div {
		display: flex;
		width: 100%;
	}
`;

const StyledPlaceholder = styled.div`
	/* flex: 1 1 25%; az bude vetsi breakpoint, pak tohle bude real*/
	background-color: yellow;
`;
