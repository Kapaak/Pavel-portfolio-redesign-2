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
        <a href="#home-page" onClick={onClick}>
          Home
        </a>
      </S.ListItem>
      <S.ListItem variants={nodeV}>
        <a href="#about-page" onClick={onClick}>
          About
        </a>
      </S.ListItem>
      <S.ListItem variants={nodeV}>
        <a href="#projects-page" onClick={onClick}>
          Projects
        </a>
      </S.ListItem>
      <S.ListItem variants={nodeV}>
        <a href="#contact-page" onClick={onClick}>
          Contact
        </a>
      </S.ListItem>
    </S.ListItems>
  );
}
