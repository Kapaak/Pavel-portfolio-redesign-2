import { breakpoints, Text } from "styles/customs";
import * as S from "./Footer.style";
import { footerIcons } from "@/constants";
import { FooterIcon } from "./parts";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.Footer>
      <Text>© {year} Pavel Zapletal</Text>
      <S.FlexContainer>
        {footerIcons.map((footerIcon, index) => (
          <FooterIcon key={index} footerIcon={footerIcon} />
        ))}
      </S.FlexContainer>
    </S.Footer>
  );
}
