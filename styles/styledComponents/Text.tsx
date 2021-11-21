import React from "react";
import styled from "styled-components";

interface Props {
	children: React.ReactNode;
}

export const Text = ({ children }: Props) => {
	return <StyledText>{children}</StyledText>;
};

const StyledText = styled.div`
	font-size: var(--f-t);
`;
