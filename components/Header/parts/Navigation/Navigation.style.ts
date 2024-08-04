import { breakpoints } from "@/ui/theme";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 150rem;
  margin: auto;

  @media ${breakpoints.desktop} {
    padding: 2rem 1rem;
  }
`;
