//libraries
import styled from "styled-components";
import Image from "next/image";

interface Props {
	imageUrl: StaticImageData;
}

const ProjectImage = ({ imageUrl }: Props) => {
	return (
		<ImageWrapper>
			<Image src={imageUrl} layout="fill" objectFit="cover" />
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div`
	position: relative;
	border-radius: 1.2rem;
	overflow: hidden;
	height: 18rem;
`;

export default ProjectImage;
