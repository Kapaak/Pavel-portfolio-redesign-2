import styled from "styled-components";

export const Logo = styled.div<{ open: boolean }>`
  position: relative;
  font-size: 2.5rem;
  font-weight: var(--fowe-bold);
  margin-left: var(--horizontal-gap);
  z-index: 999;
  color: ${({ open }) => (open ? "var(--col2)" : "var(--col1)")};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0.15rem;
    width: 1rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "var(--col2)" : "var(--col1)")};
  }
`;
