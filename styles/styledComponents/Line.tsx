import styled from "styled-components";

export const Line = () => {
	return <StyledLine />;
};

const StyledLine = styled.div`
	background-color: var(--col1);
	width: 90%;
	height: 0.3rem;
	margin: 0 auto;
`;
