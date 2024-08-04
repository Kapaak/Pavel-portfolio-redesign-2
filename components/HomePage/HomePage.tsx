import Div100vh from "react-div-100vh";
import { MaxWidth } from "@/customs/index";
import * as S from "./HomePage.style";
import { Description, MovingElements } from "./parts";

export function HomePage() {
  return (
    <S.HomePage id="home-page">
      <Div100vh>
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
      </Div100vh>
    </S.HomePage>
  );
}
