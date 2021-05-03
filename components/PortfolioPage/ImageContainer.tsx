//libs
import styled from "styled-components";
import Image from "next/image";

interface Props {
	image: string;
}

const ImageContainer = ({ image }: Props) => {
	return (
		<StyledImageContainer>
			<Image src={image} alt="" width={750} height={1718} objectFit="cover" />
		</StyledImageContainer>
	);
};

export default ImageContainer;

const StyledImageContainer = styled.div`
	position: relative;
	margin-bottom: var(--text-mb);
	div {
		width: 17rem;
		height: 25rem;
		background-color: pink;
		border-radius: 1rem;
		box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
	}
`;
