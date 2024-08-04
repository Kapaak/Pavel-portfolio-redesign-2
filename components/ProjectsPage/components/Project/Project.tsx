import { useState } from "react";
import Link from "next/link";
import { ButtonProject } from "@/ui/components";
import { ProjectType } from "interfaces";
import Image from "next/image";
import * as S from "./Project.style";
import { ProjectDetail } from "../ProjectDetail";

interface Props {
  project: ProjectType;
}

export function Project({ project }: Props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <S.Project>
      <S.ImageContainer>
        <Image
          src={project.image}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt={project.title}
        />
      </S.ImageContainer>
      <S.FlexContainer>
        <S.Title>{project.title}</S.Title>
        {project?.githubLink && (
          <S.GithubLink
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/github-dark.svg"
              width={20}
              height={20}
              alt="github link"
            />
          </S.GithubLink>
        )}
      </S.FlexContainer>
      <S.ButtonContainer>
        <Link href={project.url}>
          <ButtonProject variant={1}>visit website</ButtonProject>
        </Link>
        <ButtonProject onClick={handleClick}>
          {active ? "hide " : "show "} details
        </ButtonProject>
      </S.ButtonContainer>
      <ProjectDetail
        active={active}
        colors={project.colors}
        tech={project.tech}
        fonts={project.fonts}
      />
    </S.Project>
  );
}
