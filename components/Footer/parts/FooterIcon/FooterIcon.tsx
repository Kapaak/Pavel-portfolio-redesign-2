//libs
import Image from "next/image";
import * as S from "./FooterIcon.style";
import { FooterType } from "@/interfaces";

interface Props {
  footerIcon: FooterType;
}

export function FooterIcon({ footerIcon }: Props) {
  return (
    <S.FooterIcon href={footerIcon.link} passHref>
      <Image
        src={footerIcon.icon}
        width={20}
        height={20}
        alt={footerIcon.name}
      />
    </S.FooterIcon>
  );
}
