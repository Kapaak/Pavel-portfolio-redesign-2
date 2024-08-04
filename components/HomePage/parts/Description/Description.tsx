import {
  Button,
  MainSubHeadline,
  MainHeadline,
  Line,
  AnimationDiv,
} from "@/ui/components";
import {
  fadeInVariant,
  opacityVariant,
  widthVariant,
} from "@/animations/variants";
import * as S from "./Description.style";

export function Description() {
  return (
    <S.Description>
      <S.FullWidth>
        <AnimationDiv custom={0.6} variants={fadeInVariant}>
          <MainSubHeadline>web developer, UX/UI designer</MainSubHeadline>
        </AnimationDiv>
        <AnimationDiv custom={1.5} variants={widthVariant}>
          <Line />
        </AnimationDiv>
        <AnimationDiv custom={1} variants={fadeInVariant}>
          <MainHeadline>Pavel Zapletal</MainHeadline>
        </AnimationDiv>
        <S.ButtonContainer custom={1.5} variants={opacityVariant}>
          <Button
            scrollTo="about-page"
            primaryButton
            src="/icons/arrow.svg"
            alt="arrow"
          >
            more info
          </Button>
          <Button scrollTo="contact-page">contact</Button>
        </S.ButtonContainer>
      </S.FullWidth>
    </S.Description>
  );
}
