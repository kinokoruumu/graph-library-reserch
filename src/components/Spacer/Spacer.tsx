import styled from "styled-components";
import { Space } from "../../styles/variables";

export type SpacerProps = {
  m?: number; // margin
  mt?: number; // margin-top
  mr?: number; // margin-right
  mb?: number; // margin-bottom
  ml?: number; // margin-left
  mx?: number; // margin-left and margin-right
  my?: number; // margin-top and margin-bottom

  p?: number; // padding
  pt?: number; // padding-top
  pr?: number; // padding-right
  pb?: number; // padding-bottom
  pl?: number; // padding-left
  px?: number; // padding-left and padding-right
  py?: number; // padding-top and padding-bottom
};

export const getMargin = (payload: SpacerProps) => {
  const mt = payload.mt || payload.my || payload.m || 0;
  const mr = payload.mr || payload.mx || payload.m || 0;
  const mb = payload.mb || payload.my || payload.m || 0;
  const ml = payload.ml || payload.mx || payload.m || 0;
  return `margin: ${Space * mt}px ${Space * mr}px ${Space * mb}px ${Space *
    ml}px`;
};

export const getPadding = (payload: SpacerProps) => {
  const pt = payload.pt || payload.py || payload.p || 0;
  const pr = payload.pr || payload.px || payload.p || 0;
  const pb = payload.pb || payload.py || payload.p || 0;
  const pl = payload.pl || payload.px || payload.p || 0;
  return `padding: ${Space * pt}px ${Space * pr}px ${Space * pb}px ${Space *
    pl}px`;
};

export const spacer = (payload: SpacerProps) => {
  return `
    ${getMargin(payload)};
    ${getPadding(payload)};
  `;
};

const Spacer = styled.div<SpacerProps>`
  ${spacer};
`;

export { Spacer };
