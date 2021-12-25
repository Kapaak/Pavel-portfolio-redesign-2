//libraries
import styled from "styled-components";
//components
import Project from "./Project";
//components
import {
	Section,
	MaxWidth,
	Headline,
	breakpoints,
	AnimationRevealDiv,
} from "@/customs/index";
//interfaces
import { ProjectType } from "interfaces";

interface Props {
	data: Array<ProjectType>;
}

const ProjectsPage = ({ data }: Props) => {
	return (
		<SProjectPage id="projects-page">
			<AnimationRevealDiv>
				<SMaxWidth>
					<Headline>Recent projects</Headline>
					<GridWrapper>
						{data.map((d: ProjectType, i: number) => (
							<Project key={i} data={d} />
						))}
					</GridWrapper>
				</SMaxWidth>
			</AnimationRevealDiv>
		</SProjectPage>
	);
};

const SMaxWidth = styled(MaxWidth)`
	display: grid;
	gap: 3rem;
`;

const GridWrapper = styled.div`
	display: grid;
	align-items: flex-start;
	gap: 2rem;

	@media ${breakpoints.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}

	@media ${breakpoints.desktopX} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const SProjectPage = styled(Section)`
	background-color: var(--bg-col);
`;

export default ProjectsPage;
