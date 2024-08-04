import { AnimationDiv } from "@/customs/AnimationDiv";
import { breakpoints } from "@/customs/Breakpoints";
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
