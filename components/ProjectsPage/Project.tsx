//libraries
import styled from "styled-components";
import Image from "next/image";
//other
import ProjectImage from "../../public/images/projects/RickAndMorty-app.png";
import { Button } from "@/customs/Button";

const Project = () => {
	return (
		<SProject>
			<ImageWrapper>
				<Image src={ProjectImage} />
			</ImageWrapper>
			<HeadlineWrapper>Rick and Morty</HeadlineWrapper>
			{/*je treba ty buttony prepsat, je to shit */}
			<ButtonsWrapper>{/* <Button>pepe</Button> */}</ButtonsWrapper>
			<div>
				hidden
				<div>left options</div>
				<div>right options</div>
			</div>
		</SProject>
	);
};

const HeadlineWrapper = styled.h1`
	font-size: var(--f-bt);
	font-weight: var(--fowe-bold);
`;

const ButtonsWrapper = styled.div`
	display: flex;
`;

const ImageWrapper = styled.div`
	border-radius: 2rem;
	overflow: hidden;
`;

const SProject = styled.div`
	width: 100%;
	min-height: 30rem;
	border: 1px solid red;
	border-radius: 2rem;
	padding: 1.5rem 2rem;
	background-color: var(--col3);
`;

export default Project;
