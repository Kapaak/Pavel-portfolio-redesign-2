import { opacityVariant } from "@/animations/variants";
import { movingIcons } from "@/constants";
import * as S from "./MovingElements.style";
import { MovingIcon } from "../../components";

export function MovingElements() {
  return (
    <S.MovingElements custom={0.6} variants={opacityVariant}>
      {movingIcons.map((icon, index) => (
        <MovingIcon
          key={index}
          image={icon.img}
          label={icon.name}
          position={{ top: icon.position[0], left: icon.position[1] }}
        />
      ))}
    </S.MovingElements>
  );
}
