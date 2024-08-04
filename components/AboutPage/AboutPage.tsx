import { AnimationRevealDiv, MaxWidth, Section } from "styles/customs";
import * as S from "./AboutPage.style";
import { Description } from "./parts";

export function AboutPage() {
  return (
    <S.AboutPage id="about-page">
      <AnimationRevealDiv>
        <MaxWidth>
          <S.FlexContainer>
            <Description />
          </S.FlexContainer>
        </MaxWidth>
      </AnimationRevealDiv>
    </S.AboutPage>
  );
}
