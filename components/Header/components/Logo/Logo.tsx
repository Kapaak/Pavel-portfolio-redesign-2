import { animateScroll as scroll } from "react-scroll";
import * as S from "./Logo.style";

interface Props {
  open: boolean;
}

export function Logo({ open }: Props) {
  return (
    <S.Logo open={open} onClick={() => scroll.scrollToTop()}>
      portfolio
    </S.Logo>
  );
}
