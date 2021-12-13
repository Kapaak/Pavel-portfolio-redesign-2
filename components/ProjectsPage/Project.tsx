//libraries
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
//styles
import { ButtonProject } from "@/customs/index";
//others
import { ProjectType } from "interfaces";

interface Props {
	data: ProjectType;
}

const Project = ({ data }: Props) => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(prev => !prev);
	};

	return (
		<SProject>
			<ImageWrapper>
				<Image src={data.image} layout="fill" objectFit="cover" />
			</ImageWrapper>
			<HeadlineWrapper>{data.title}</HeadlineWrapper>
			<ButtonsWrapper>
				<ButtonProject variant={1}>visit website</ButtonProject>
				<ButtonProject onClick={handleClick}>show details</ButtonProject>
			</ButtonsWrapper>
			<DetailsWrapper active={active}>
				<DetailsLeft>
					<p>Tech</p>
					<p>Colors</p>
					<p>Fonts</p>
				</DetailsLeft>
				<DetailsRight>
					<p>Next.js / Sanity.io</p>
					<p>Colors</p>
					<p>Roboto / Oswald</p>
				</DetailsRight>
			</DetailsWrapper>
		</SProject>
	);
};

const DetailsLeft = styled.div`
	padding: 2rem 0;
	font-weight: var(--fowe-bold);
`;

const DetailsRight = styled.div`
	padding: 2rem 0;
`;

const DetailsWrapper = styled.div<{ active: boolean }>`
	display: ${({ active }) => (active ? "flex" : "none")};
	gap: 2rem;
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
`;

const ImageWrapper = styled.div`
	position: relative;
	border-radius: 1.2rem;
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
