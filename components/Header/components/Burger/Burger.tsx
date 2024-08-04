import { useCallback } from "react";
import * as S from "./Burger.style";

interface BurgerProps {
  open: boolean;
  onToggle: (open: boolean) => void;
}

export function Burger({ open, onToggle }: BurgerProps) {
  const handleOpen = useCallback(() => {
    onToggle(!open);
  }, [open]);

  return (
    <S.Burger open={open} onClick={handleOpen}>
      <p />
      {!open && <p />}
      <p />
    </S.Burger>
  );
}
