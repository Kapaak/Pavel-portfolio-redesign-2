//libraries
import { useState } from "react";
import styled from "styled-components";
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
			<ProjectImage imageUrl={data.image} />
			<HeadlineWrapper>{data.title}</HeadlineWrapper>
			<ButtonsWrapper>
				<ButtonProject variant={1}>visit website</ButtonProject>
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
	margin: 3rem 0 2rem;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1rem;
`;

const SProject = styled.div`
	width: 100%;
	/* box-shadow: var(--shadow); */
	border-radius: 2rem;
	padding: 0.8rem 1.2rem;
	background-color: var(--col3);
`;

export default Project;
