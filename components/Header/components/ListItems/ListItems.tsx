import { Link as ScrollLink } from "react-scroll";
import { listItemsVariants } from "@/animations/variants";
import * as S from "./ListItems.style";

interface Props {
  open: boolean;
  onClick: () => void;
}

export function ListItems({ open, onClick }: Props) {
  const { rootV, nodeV } = listItemsVariants;

  return (
    <S.ListItems
      initial="inactive"
      animate={open ? "active" : "inactive"}
      variants={rootV}
      open={open}
    >
      <S.ListItem variants={nodeV}>
        <ScrollLink to="home-page" smooth={true} onClick={onClick}>
          Home
        </ScrollLink>
      </S.ListItem>
      <S.ListItem variants={nodeV}>
        <ScrollLink to="about-page" smooth={true} onClick={onClick}>
          About
        </ScrollLink>
      </S.ListItem>
      <S.ListItem variants={nodeV}>
        <ScrollLink to="projects-page" smooth={true} onClick={onClick}>
          Projects
        </ScrollLink>
      </S.ListItem>
      <S.ListItem variants={nodeV}>
        <ScrollLink to="contact-page" smooth={true} onClick={onClick}>
          Contact
        </ScrollLink>
      </S.ListItem>
    </S.ListItems>
  );
}
