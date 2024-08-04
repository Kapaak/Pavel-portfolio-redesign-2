import { AnimationDiv } from "@/customs/AnimationDiv";
import { breakpoints } from "@/customs/Breakpoints";
import styled from "styled-components";

export const FullWidth = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled(AnimationDiv)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${breakpoints.desktop} {
    justify-content: flex-start;
  }
`;
export const Description = styled.div`
  display: flex;
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  @media ${breakpoints.tablet} {
    justify-content: center;
  }
`;
