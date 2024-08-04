import { breakpoints } from "@/ui/theme";
import styled from "styled-components";

export const Footer = styled.footer`
  background-color: var(--first-col);
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 0 var(--horizontal-gap) var(--horizontal-gap);
  color: var(--fourth-col);
  gap: 1rem;

  @media ${breakpoints.tabletS} {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 2rem;

    align-items: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
