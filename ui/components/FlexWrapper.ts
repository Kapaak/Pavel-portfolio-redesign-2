import styled from "styled-components";

export const FlexWrapper = styled.div<{
  $justify?: string;
  $align?: string;
  $direction?: string;
  $gap?: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction ? $direction : "column")};
  justify-content: ${({ $justify }) => ($justify ? $justify : "flex-start")};
  align-items: ${({ $align }) => ($align ? $align : "stretch")};
  gap: ${({ $gap }) => ($gap ? $gap : "0")};
  height: 100%;
`;
