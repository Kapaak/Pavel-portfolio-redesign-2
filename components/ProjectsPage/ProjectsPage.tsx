import styled from "styled-components";
import {
  Section,
  MaxWidth,
  Headline,
  AnimationRevealDiv,
} from "@/ui/components";
import { projects } from "@/constants";
import { ProjectType } from "@/interfaces";
import { Project } from "./components";
import { breakpoints } from "@/ui/theme";

export function ProjectsPage() {
  return (
    <SProjectPage id="projects-page">
      <AnimationRevealDiv>
        <SMaxWidth>
          <Headline>Recent projects</Headline>
          <GridWrapper>
            {projects.map((project: ProjectType, i: number) => (
              <Project key={i} project={project} />
            ))}
          </GridWrapper>
        </SMaxWidth>
      </AnimationRevealDiv>
    </SProjectPage>
  );
}

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
