//libraries
import styled from "styled-components";
//components
import Project from "./Project";
//styles
import { Section, MaxWidth, FlexWrapper, Headline } from "@/customs/index";
//interfaces
import { ProjectType } from "interfaces";

interface Props {
	data: Array<ProjectType>;
}

const ProjectsPage = ({ data }: Props) => {
	return (
		<SProjectPage>
			<MaxWidth>
				<Headline>Recent projects</Headline>
				<FlexWrapper>
					{data.map((d: ProjectType, i: number) => (
						<Project key={i} data={d} />
					))}
				</FlexWrapper>
			</MaxWidth>
		</SProjectPage>
	);
};

const SProjectPage = styled(Section)`
	background-color: var(--bg-col);
`;

export default ProjectsPage;
