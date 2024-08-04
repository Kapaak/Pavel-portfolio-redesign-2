import { breakpoints } from "@/customs/Breakpoints";
import { Section } from "@/customs/Section";
import styled from "styled-components";

export const AboutPage = styled(Section)`
  background-color: var(--col2);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
