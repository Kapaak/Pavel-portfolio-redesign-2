import { breakpoints } from "@/ui/theme";
import styled from "styled-components";
import NextLink from "next/link";

export const GithubLink = styled(NextLink)`
  display: flex;
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    opacity: 0.7;
  }
`;

export const Title = styled.h3`
  font-size: var(--f-bt);
  font-weight: var(--fowe-bold);
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0 1rem;
  gap: 1rem;

  @media ${breakpoints.desktopX} {
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Project = styled.div`
  width: 100%;
  border-radius: 2rem;
  padding: 1rem 1.2rem 2rem;
  background-color: var(--col3);
`;

export const ImageContainer = styled.div`
  position: relative;
  border-radius: 1.2rem;
  overflow: hidden;
  height: 18rem;

  @media ${breakpoints.tabletS} {
    height: calc(25rem + 5vw);
  }

  @media ${breakpoints.tablet} {
    height: calc(15rem + 5vw);
  }
`;
