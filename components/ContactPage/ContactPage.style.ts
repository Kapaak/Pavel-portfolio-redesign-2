import { Section } from "@/ui/components";
import { breakpoints } from "@/ui/theme";
import styled from "styled-components";

export const ContactPage = styled(Section)`
  background-color: var(--col1);
  color: var(--bg-col);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  @media ${breakpoints.tabletS} {
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  @media ${breakpoints.tabletS} {
    width: 77%;
  }
`;

export const UnderlinedLink = styled.a`
  position: relative;
  line-height: 2;
  font-size: var(--f-t);
  border-bottom: 2px solid var(--bg-col);

  color: inherit;
  text-decoration: none;
`;
