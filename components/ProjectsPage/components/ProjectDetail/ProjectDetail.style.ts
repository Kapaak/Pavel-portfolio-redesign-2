import { FlexWrapper } from "@/ui/components";
import styled from "styled-components";

export const FlexContainer = styled(FlexWrapper)`
  height: auto;
`;

export const ColoredBox = styled.div<{ color: string }>`
  border-radius: 0.4rem;
  box-shadow: 0 0 20px rgba(8, 1, 1, 0.125);
  width: 4rem;
  height: 2rem;
  background-color: ${({ color }) => (color ? color : "#000")};
`;

export const DetailLeft = styled(FlexWrapper)`
  gap: 1rem;
  padding: 2rem 0 0;
  font-weight: var(--fowe-bold);
`;

export const DetailRight = styled(FlexWrapper)`
  gap: 1rem;
  padding: 2rem 0 0;
  height: auto;
`;

export const ProjectDetail = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "flex" : "none")};
  gap: 2rem;
  border-top: 1px solid var(--col4);
  margin-top: 2rem;
`;
