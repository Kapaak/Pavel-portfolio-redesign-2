//libraries
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
//components
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";
//styles
import { breakpoints, ButtonProject } from "@/customs/index";
//others
import { ProjectType } from "interfaces";
import Image from "next/image";

interface Props {
  data: ProjectType;
}

const Project = ({ data }: Props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <SProject>
      <ProjectImage imageUrl={data.image} alt={data.title} />
      <HeadlineWrapper>
        <Title>{data.title}</Title>
        {data?.githubLink && (
          <Link href={data.githubLink} passHref>
            <GithubLink target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/github-dark.svg"
                width={20}
                height={20}
                alt="github link"
              />
            </GithubLink>
          </Link>
        )}
      </HeadlineWrapper>
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

const GithubLink = styled.a`
  display: flex;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    opacity: 0.7;
  }
`;

const Title = styled.h3`
  font-size: var(--f-bt);
  font-weight: var(--fowe-bold);
`;

const HeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0 1rem;
  gap: 1rem;

  @media ${breakpoints.desktopX} {
    justify-content: space-between;
  }
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
