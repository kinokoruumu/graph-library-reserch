import styled from "styled-components";
import { Radius, Color, Space, Size } from "../../styles/variables";

export const Container = styled.div<{ minWidth?: string }>`
  flex: 1;
  border-radius: ${Radius.MEDIUM};
  background-color: ${Color.background.default};
  min-width: ${({ minWidth }) => minWidth || "auto"};
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Space * 2}px ${Space * 3}px;
  border-bottom: ${Size.Border.Small} solid ${Color.gray.light};
`;

export const InputContainer = styled.div`
  width: 340px;
`;

export const ContentContainer = styled.div`
  padding: ${Space * 3}px;
`;
