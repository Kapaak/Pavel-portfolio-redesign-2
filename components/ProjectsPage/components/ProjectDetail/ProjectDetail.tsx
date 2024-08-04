import { FlexWrapper } from "@/ui/components";
import * as S from "./ProjectDetail.style";

interface ProjectDetailProps {
  active: boolean;
  colors: Array<string>;
  fonts: Array<string>;
  tech: Array<string>;
}

export function ProjectDetail({
  active,
  colors,
  fonts,
  tech,
}: ProjectDetailProps) {
  return (
    <S.ProjectDetail active={active}>
      <S.DetailLeft justify="space-between">
        <p>Tech</p>
        <p>Colors</p>
        <p>Fonts</p>
      </S.DetailLeft>
      <S.DetailRight justify="space-between">
        <S.FlexContainer direction="row" gap=".5rem">
          {tech.map((technology, i) => {
            if (i + 1 !== tech.length)
              return (
                <FlexWrapper key={i} gap=".5rem" direction="row">
                  <p>{technology}</p>
                  <p>/</p>
                </FlexWrapper>
              );
            return <p key={i}>{technology}</p>;
          })}
        </S.FlexContainer>
        <S.FlexContainer direction="row" gap="1rem">
          {colors.map((color, i) => {
            return <S.ColoredBox key={i} color={color} />;
          })}
        </S.FlexContainer>
        <S.FlexContainer direction="row" gap=".5rem">
          {fonts.map((font, i) => {
            const hasNextItem = i + 1 !== fonts.length;

            if (hasNextItem)
              return (
                <S.FlexContainer key={i} direction="row" gap=".5rem">
                  <p>{font}</p>
                  <p>/</p>
                </S.FlexContainer>
              );
            return <p key={i}>{font}</p>;
          })}
        </S.FlexContainer>
      </S.DetailRight>
    </S.ProjectDetail>
  );
}
