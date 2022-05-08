//libraries
import styled from "styled-components";
import Image from "next/image";
//components
import { breakpoints } from "@/customs/Breakpoints";

interface Props {
	imageUrl: StaticImageData;
	alt: string;
}

const ProjectImage = ({ imageUrl, alt }: Props) => {
	return (
		<ImageWrapper>
			<Image
				src={imageUrl}
				layout="fill"
				objectFit="cover"
				placeholder="blur"
				alt={`${alt} picture`}
			/>
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div`
	position: relative;
	border-radius: 1.2rem;
	overflow: hidden;
	height: 18rem;

	@media ${breakpoints.tabletS} {
		height: calc(25rem + 5vw);
	}

	@media ${breakpoints.tablet} {
		height: calc(15rem + 5vw);
	}
`;

export default ProjectImage;
