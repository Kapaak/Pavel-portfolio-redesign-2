import { breakpoints } from "@/customs/Breakpoints";
import { Headline } from "@/customs/Headline";
import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${breakpoints.tabletS} {
    flex-direction: row;
  }

  @media ${breakpoints.desktopX} {
    gap: 5rem;

    img {
      transform: scale(1.3);
      margin-left: -5.5rem !important;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 22rem;
  border-radius: 3rem;
  overflow: hidden;

  @media ${breakpoints.tabletS} {
    flex: 1 1 50%;
    height: auto;
    border-radius: 2rem;

    & > span {
      height: 100% !important;
    }
  }

  @media ${breakpoints.tablet} {
    max-width: 35rem;
    height: 44rem;
  }

  @media ${breakpoints.desktopX} {
    max-width: 38rem;
    height: 50rem;
  }
`;

export const TextContainer = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > ${Headline} {
    display: none;
  }

  @media ${breakpoints.tablet} {
    & > ${Headline} {
      display: inline-block;
    }
  }

  @media ${breakpoints.desktopX} {
    padding-top: 2rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${breakpoints.tablet} {
    & > ${Headline} {
      display: none;
    }
  }
`;
