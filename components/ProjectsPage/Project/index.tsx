//libraries
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
//components
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";
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
			<ProjectImage imageUrl={data.image} alt={data.title} />
			<HeadlineWrapper>{data.title}</HeadlineWrapper>
			<ButtonsWrapper>
				<Link href={data.url}>
					<a>
						<ButtonProject variant={1}>visit website</ButtonProject>
					</a>
				</Link>
				<ButtonProject onClick={handleClick}>
					{active ? "hide " : "show "}details
				</ButtonProject>
			</ButtonsWrapper>
			<ProjectDetails
				active={active}
				colors={data.colors}
				tech={data.tech}
				fonts={data.fonts}
			/>
		</SProject>
	);
};

const HeadlineWrapper = styled.h1`
	font-size: var(--f-bt);
	font-weight: var(--fowe-bold);
	margin: 3rem 0 1rem;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

const SProject = styled.div`
	width: 100%;
	border-radius: 2rem;
	padding: 1rem 1.2rem 2rem;
	background-color: var(--col3);
`;

export default Project;
