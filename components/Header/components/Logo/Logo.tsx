import { scrollTop } from "@/utils";
import * as S from "./Logo.style";

interface Props {
  open: boolean;
}

export function Logo({ open }: Props) {
  return (
    <S.Logo open={open} onClick={scrollTop}>
      portfolio
    </S.Logo>
  );
}
