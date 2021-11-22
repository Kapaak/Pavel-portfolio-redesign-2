import styled from "styled-components";

export const Line = () => {
	return <StyledLine />;
};

const StyledLine = styled.div`
	background-color: var(--col1);
	width: 30rem;
	height: 0.3rem;
	margin: 0 auto;
`;
