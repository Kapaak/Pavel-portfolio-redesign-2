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
			<SMaxWidth>
				<Headline>Recent projects</Headline>
				<GridWrapper>
					{data.map((d: ProjectType, i: number) => (
						<Project key={i} data={d} />
					))}
				</GridWrapper>
				{/* <FlexWrapper gap="2rem">
					{data.map((d: ProjectType, i: number) => (
						<Project key={i} data={d} />
					))}
				</FlexWrapper> */}
			</SMaxWidth>
		</SProjectPage>
	);
};

const SMaxWidth = styled(MaxWidth)`
	display: grid;
	gap: 3rem;
`;

const GridWrapper = styled.div`
	display: grid;
	/* grid-template-columns: repeat(2, 1fr); */
	align-items: flex-start;
	gap: 2rem;
`;

const SProjectPage = styled(Section)`
	background-color: var(--bg-col);
`;

export default ProjectsPage;
