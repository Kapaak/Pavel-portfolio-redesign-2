import { useState } from "react";
import { Logo, ListItems, ListItemsDesktop, Burger } from "../../components";
import * as S from "./Navigation.style";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <S.Navigation>
      <Logo open={open} />
      <ListItems open={open} onClick={() => setOpen(false)} />
      <ListItemsDesktop />
      <Burger open={open} onToggle={(isOpen) => setOpen(isOpen)} />
    </S.Navigation>
  );
}
