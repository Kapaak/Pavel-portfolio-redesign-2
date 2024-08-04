import { scrollTop } from "@/utils";
import * as S from "./ListItemsDesktop.style";

export function ListItemsDesktop() {
  return (
    <S.ListItemsDesktop>
      <S.ListItem>
        <a onClick={scrollTop}>Home</a>
      </S.ListItem>
      <S.ListItem>
        <a href="#about-page">About</a>
      </S.ListItem>
      <S.ListItem>
        <a href="#projects-page">Projects</a>
      </S.ListItem>
      <S.ListItem>
        <a href="#contact-page">Contact</a>
      </S.ListItem>
    </S.ListItemsDesktop>
  );
}