import styled from "styled-components";
import NextLink from "next/link";

export const FooterIcon = styled(NextLink)`
  display: inline-flex;
  position: relative;
  padding: 0.65rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  border: 1px solid var(--col1);

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    border: 1px solid var(--bg-col);
    transition: all 0.3s;
  }
`;
