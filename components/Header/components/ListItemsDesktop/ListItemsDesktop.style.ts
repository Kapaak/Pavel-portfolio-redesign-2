import { breakpoints } from "@/ui/theme";
import styled from "styled-components";

export const ListItemsDesktop = styled.ul`
  display: none;
  margin-left: auto;
  gap: 3rem;
  margin-right: 3rem;

  @media ${breakpoints.desktop} {
    display: flex;
  }
`;

export const ListItem = styled.li`
  width: 7rem;
  list-style: none;

  a {
    text-decoration: none;
    font-size: var(--f-t);
    color: var(--col1);
    padding: 0.8rem 1.3rem;
    border-radius: 0.4rem;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }
`;
