import * as React from "react";
import * as Styled from "./styled";
import { Color } from "../../styles/variables";

export type ColorType =
  | "initial"
  | "primary"
  | "secondary"
  | "disabled"
  | "hint"
  | "white";

type FontSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl"
  | "xxxxl"
  | "xxxxxl"
  | "xxxxxxl"
  | "xxxxxxxl";

export const fontSize: { [key in FontSize]: number } = {
  xs: 12,
  sm: 13,
  md: 14,
  lg: 15,
  xl: 16,
  xxl: 18,
  xxxl: 20,
  xxxxl: 24,
  xxxxxl: 28,
  xxxxxxl: 32,
  xxxxxxxl: 40,
};

const getColor = (key: ColorType | string) => {
  switch (key) {
    case "initial":
      return Color.black;
    case "primary":
      return Color.text.primary;
    case "secondary":
      return Color.text.secondary;
    case "disabled":
      return Color.text.disabled;
    case "hint":
      return Color.text.hint;
    case "white":
      return Color.text.white;
    default:
      return key;
  }
};

export type TextAlign = "left" | "center" | "right";

export type FontWeight = "normal" | "bold";

type Props = {
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  color?: ColorType | string;
  align?: "left" | "center" | "right";
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: string;
};

const Typography: React.FunctionComponent<Props> = ({
  children,
  component: Component = "p",
  color = "initial",
  align = "left",
  size = "md",
  weight = "normal",
  lineHeight = "1.4",
}) => (
  <Styled.Container
    as={Component}
    color={getColor(color)}
    align={align}
    fontSize={`${fontSize[size]}px`}
    weight={weight}
    lineHeight={lineHeight}
  >
    {children}
  </Styled.Container>
);

export { Typography };
