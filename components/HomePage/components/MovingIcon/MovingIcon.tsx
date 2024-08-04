import Image, { StaticImageData } from "next/image";
import * as S from "./MovingIcon.style";
import { getRandomNumber } from "@/utils";

interface MovingIconProps {
  label: string;
  image: string | StaticImageData;
  position: {
    top: number;
    left: number;
  };
}

export function MovingIcon({ image, label, position }: MovingIconProps) {
  return (
    <S.MovingIcon
      animate={{
        x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
        y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
      }}
      transition={{ repeat: Infinity, duration: 4 }}
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={1}
      top={position.top}
      left={position.left}
    >
      <Image src={image} alt={label} />
      <p>{label}</p>
    </S.MovingIcon>
  );
}
