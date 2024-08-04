import { Link as ScrollLink } from "react-scroll";
import * as S from "./ListItemsDesktop.style";

export function ListItemsDesktop() {
  return (
    <S.ListItemsDesktop>
      <S.ListItem>
        <ScrollLink to="home-page" smooth={true}>
          Home
        </ScrollLink>
      </S.ListItem>
      <S.ListItem>
        <ScrollLink to="about-page" smooth={true}>
          About
        </ScrollLink>
      </S.ListItem>
      <S.ListItem>
        <ScrollLink to="projects-page" smooth={true}>
          Projects
        </ScrollLink>
      </S.ListItem>
      <S.ListItem>
        <ScrollLink to="contact-page" smooth={true}>
          Contact
        </ScrollLink>
      </S.ListItem>
    </S.ListItemsDesktop>
  );
}
