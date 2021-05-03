//libs
import styled from "styled-components";

interface Props {
	image: string;
}

const ImageContainer = ({ image }: Props) => {
	return (
		<StyledImageContainer>
			<div></div>
		</StyledImageContainer>
	);
};

export default ImageContainer;

const StyledImageContainer = styled.div`
	margin-bottom: var(--text-mb);
	div {
		width: 17rem;
		height: 25rem;
		background-color: pink;
		border-radius: 1rem;
		box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
	}
`;
