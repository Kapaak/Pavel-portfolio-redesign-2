import { AnimationDiv } from "@/ui/components";
import { breakpoints } from "@/ui/theme";
import styled from "styled-components";

export const MovingElements = styled(AnimationDiv)`
  position: relative;
  width: 100%;
  height: 37rem;
  overflow: hidden;
  display: none;

  @media ${breakpoints.tablet} {
    display: block;
  }
`;
