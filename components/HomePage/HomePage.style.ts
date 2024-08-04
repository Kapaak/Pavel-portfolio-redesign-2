import { FlexWrapper, Section } from "@/ui/components";
import { breakpoints } from "@/ui/theme";
import styled from "styled-components";

export const HomePage = styled(Section)`
  display: flex;
  background: var(--bg-col);
  height: 100vmax;

  @media ${breakpoints.tablet} {
    //100vmax not working properly on desktop
    height: 100vh;
  }
`;

export const FlexContainer = styled(FlexWrapper)`
  @media ${breakpoints.tablet} {
    align-items: center;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;
