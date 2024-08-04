import { breakpoints } from "@/ui/theme";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ListItem = styled(motion.li)<any>`
  list-style: none;
  padding: 0 4rem;
  margin-bottom: var(--text-mb);
  font-size: var(--fosi-nav);
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media ${breakpoints.tablet} {
    padding: 0 4rem;
  }
`;

export const ListItems = styled(motion.ul)<{ open: boolean }>`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--col1);
  color: var(--bg-col);
  font-weight: var(--fowe-bold);
  z-index: 998;
`;
