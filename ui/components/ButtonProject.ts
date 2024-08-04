import styled from "styled-components";
import { breakpoints } from "../theme";

type RangeType = 1 | 2;

export const ButtonProject = styled.button<{ variant?: RangeType }>`
  border: none;
  font-family: inherit;
  cursor: pointer;
  border-radius: 0.6rem;
  background-color: ${({ variant }) =>
    variant == 1 ? "var(--col1)" : "var(--col3)"};
  color: ${({ variant }) => (variant == 1 ? "var(--bg-col)" : "var(--col1)")};
  padding: 0.8rem 1.4rem;
  font-size: 1.6rem;
  transition: box-shadow 0.5s ease;

  @media ${breakpoints.desktop} {
    &:hover {
      box-shadow: ${({ variant }) => (variant == 1 ? "var(--shadow)" : "none")};
      font-weight: ${({ variant }) => (variant == 1 ? "500" : "600")};
      transition: box-shadow 0.5s ease;
    }
  }
`;
