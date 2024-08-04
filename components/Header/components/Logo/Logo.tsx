import * as S from "./Logo.style";

interface Props {
  open: boolean;
}

export function Logo({ open }: Props) {
  return (
    <S.Logo open={open} onClick={() => window?.scrollTo(0, 0)}>
      portfolio
    </S.Logo>
  );
}
