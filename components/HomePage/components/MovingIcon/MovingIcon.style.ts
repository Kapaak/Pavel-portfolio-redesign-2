import { breakpoints } from "@/ui/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MovingIcon = styled(motion.div)<{ top: number; left: number }>`
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
