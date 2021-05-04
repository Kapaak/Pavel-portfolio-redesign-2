//libs
import styled from "styled-components";
import Image from "next/image";
//breakpoints
import Breakpoints from "../global/Breakpoints";

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
		width: var(--box-width);
		height: var(--box-height);
		background-color: pink;
		border-radius: 1rem;
		box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
	}
`;
