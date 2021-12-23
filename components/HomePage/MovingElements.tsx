//libraries
import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
//components
import { breakpoints, AnimationDiv } from "@/customs/index";
//icons
import ReactIcon from "../../public/icons/react.svg";
import GithubIcon from "../../public/icons/github2.svg";
import TypescriptIcon from "../../public/icons/typescript.svg";
import NextjsIcon from "../../public/icons/nextjs.svg";
import SvelteIcon from "../../public/icons/svelte.svg";
import SanityIcon from "../../public/icons/sanity.svg";
//animation
import { opacityVariant } from "@/animations/variants";

const MovingElements = () => {
  const arrayIcons = [
    { img: GithubIcon, name: "github", position: [10, 35] },
    { img: NextjsIcon, name: "next.js", position: [40, 40] },
    { img: ReactIcon, name: "react", position: [55, 60] },
    { img: TypescriptIcon, name: "typescript", position: [65, 28] },
    { img: SvelteIcon, name: "svelte", position: [25, 12] },
    { img: SanityIcon, name: "sanity.io", position: [25, 65] },
  ];
  return (
    <StyledMovingElements custom={0.6} variants={opacityVariant}>
      {arrayIcons?.map((icon, index) => (
        <MovingElement
          key={index}
          top={icon.position[0]}
          left={icon.position[1]}
          animate={{
            x: [0, getRandomNumber(1, 15), 0, getRandomNumber(1, 15), 0],
            y: [0, getRandomNumber(1, 10), getRandomNumber(1, 10), 0],
          }}
          transition={{ repeat: Infinity, duration: 4 }}
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
        >
          <Image src={icon.img} />
          <p>{icon.name}</p>
        </MovingElement>
      ))}
    </StyledMovingElements>
  );
};

const getRandomNumber = (min = 0, max = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomNumber = Math.random() * (max - min + 1) + min;

  return Math.ceil(randomNumber);
};

const MovingElement = styled(motion.div)<{ top: number; left: number }>`
  position: absolute;
  display: flex;
  top: ${({ top }) => (top ? `${top}%` : "0")};
  left: ${({ left }) => (left ? `${left}%` : "0")};
  border: 1px solid var(--bg-col);
  padding: 2rem;
  border-radius: 50%;

  img {
    width: 5rem !important;
    pointer-events: none;
  }

  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    background-color: var(--col1);
    color: var(--bg-col);
    padding: 0.3rem 0.6rem;
    border-radius: 0.5rem;
    transform: translate(-50%, 20%);
    font-size: 1.4rem;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 6;
  }

  &:hover {
    border: 1px solid var(--col1);
    p {
      opacity: 1;
    }
  }

  @media ${breakpoints.desktopX} {
    img {
      width: 6.5rem !important;
    }
  }
`;

const StyledMovingElements = styled(AnimationDiv)`
  position: relative;
  width: 100%;
  height: 37rem;
  /* height: 60rem; //add */
  overflow: hidden;
  /* border: 1px solid black; */
`;

export default MovingElements;
