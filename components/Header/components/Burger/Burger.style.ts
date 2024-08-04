import { breakpoints } from "@/customs/Breakpoints";
import styled from "styled-components";

export const Burger = styled.div<{ open: boolean }>`
  position: relative;
  height: 4.2rem;
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: ${({ open }) => (open ? "center" : "space-between")};
  margin: 1.4rem var(--horizontal-gap) 1.4rem auto;
  cursor: pointer;
  z-index: 11;
  border-radius: 0.45rem;
  box-shadow: var(--shadow);
  padding: 1rem;
  z-index: 999;
  background-color: #f2f1eec7;

  p {
    height: 0.2rem;
    width: 100%;
    background-color: var(--col1);
    margin: 0 auto;
    transition: all 0.5s ease;

    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      margin-top: ${({ open }) => (open ? "0.1rem" : "0")};
    }

    &:last-child {
      margin-top: ${({ open }) => (open ? "-0.1rem" : "0")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media ${breakpoints.desktop} {
    display: none;
  }
`;
