import { AnimationRevealDiv, Headline, MaxWidth, Text } from "@/ui/components";
import * as S from "./ContactPage.style";

export function ContactPage() {
  return (
    <S.ContactPage id="contact-page">
      <AnimationRevealDiv>
        <MaxWidth>
          <S.FlexContainer>
            <Headline invertColors>Contact</Headline>
            <S.TextContainer>
              <Text>
                I am always available for new challenges. If you want to create
                something awesome or just ask, don't hesitate to contact me.
              </Text>
            </S.TextContainer>
            <S.UnderlinedLink href="mailto:pavel.zaplet25@gmail.com">
              pavel.zaplet25@gmail.com
            </S.UnderlinedLink>
            <S.UnderlinedLink href="/CV.pdf" download>
              download curriculum vitae
            </S.UnderlinedLink>
          </S.FlexContainer>
        </MaxWidth>
      </AnimationRevealDiv>
    </S.ContactPage>
  );
}
