//libraries
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
//other
import ProjectImage from "../../public/images/projects/RickAndMorty-app.png";
import { Button } from "@/customs/Button";

const Project = () => {
	const [active, setActive] = useState(false);

	console.log(active);
	return (
		<SProject>
			<ImageWrapper>
				<Image src={ProjectImage} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<HeadlineWrapper>Rick and Morty</HeadlineWrapper>
			<ButtonsWrapper>
				<Button primaryButton={true}>visit website</Button>
				<button onClick={() => setActive(prev => !prev)}>show details</button>
			</ButtonsWrapper>
			<DetailsWrapper active={active}>
				<DetailsLeft>
					<p>Tech</p>
					<p>Colors</p>
					<p>Fonts</p>
				</DetailsLeft>
				<DetailsRight>
					<p>
						Next.js <span style={{ color: "var(--col4)" }}>/</span> Sanity.io
					</p>
					<p>Colors</p>
					<p>
						Roboto <span style={{ color: "var(--col4)" }}>/</span> Oswald
					</p>
				</DetailsRight>
			</DetailsWrapper>
		</SProject>
	);
};

const DetailsLeft = styled.div`
	padding: 2rem;
	border-radius: 1rem;
	background-color: var(--col1);
	color: var(--col3);
`;

const DetailsRight = styled.div`
	padding: 2rem;
`;

const DetailsWrapper = styled.div<{ active: boolean }>`
	display: ${({ active }) => (active ? "flex" : "none")};
	border-top: 1px solid var(--col4);
	margin-top: 2rem;
	padding: 2rem 0;
`;

const HeadlineWrapper = styled.h1`
	font-size: var(--f-bt);
	font-weight: var(--fowe-bold);
	margin: 3rem 0 2rem;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1rem;

	button a {
		padding: 0.6rem 0.8rem;
	}

	button:last-child {
		border: none;

		background-color: transparent;
		box-shadow: none;
		font-weight: var(--fowe-bold);
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	border-radius: 1.4rem;
	overflow: hidden;
	height: 18rem;
`;

const SProject = styled.div`
	width: 100%;
	/* box-shadow: var(--shadow); */
	border-radius: 2rem;
	padding: 1.8rem 2.2rem;
	background-color: var(--col3);
`;

export default Project;
