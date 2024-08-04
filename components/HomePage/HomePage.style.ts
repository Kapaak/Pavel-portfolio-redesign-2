import { breakpoints } from "@/customs/Breakpoints";
import { FlexWrapper } from "@/customs/FlexWrapper";
import { Section } from "@/customs/Section";
import styled from "styled-components";

export const HomePage = styled(Section)`
  background: var(--bg-col);
`;

export const FlexContainer = styled(FlexWrapper)`
  @media ${breakpoints.tablet} {
    align-items: center;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
