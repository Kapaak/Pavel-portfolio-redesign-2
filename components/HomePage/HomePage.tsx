import { MaxWidth } from "@/ui/components";
import * as S from "./HomePage.style";
import { Description, MovingElements } from "./parts";

export function HomePage() {
  return (
    <S.HomePage id="home-page">
      <MaxWidth>
        <S.FlexContainer
          direction="column-reverse"
          justify="flex-start"
          align="center"
        >
          <Description />
          <MovingElements />
        </S.FlexContainer>
      </MaxWidth>
    </S.HomePage>
  );
}
