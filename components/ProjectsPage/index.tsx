//libraries
import styled from "styled-components";
//components
import Project from "./Project";
//styles
import { Section, MaxWidth, FlexWrapper, Headline } from "@/customs/index";

const ProjectsPage = () => {
	return (
		<SProjectPage>
			<MaxWidth>
				<Headline>Recent projects</Headline>
				<FlexWrapper>
					<Project />
				</FlexWrapper>
			</MaxWidth>
		</SProjectPage>
	);
};

const SProjectPage = styled(Section)`
	background-color: var(--bg-col);
`;

export default ProjectsPage;
