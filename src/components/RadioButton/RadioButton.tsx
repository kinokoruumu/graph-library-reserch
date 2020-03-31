import React from "react";
import styled from "styled-components";
import { Color, Space, Size } from "../../styles/variables";
import { colors } from "../../styles/variables/color";

export enum RadioButtonSize {
  // MEDIUM = "24px",
  MEDIUM = "18px",
}

const Wrapper = styled("label")<{ size: RadioButtonSize }>`
  position: relative;
  display: inline-flex;
  align-items: center;

  & > input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    opacity: 0;
  }
`;

const indicatorSizes = {
  [RadioButtonSize.MEDIUM]: {
    inside: "8px",
    border: "1px",
  },
};

type IndicatorProps = {
  size: RadioButtonSize;
  inside: string;
  border: string;
};
const Indicator = styled("div")<IndicatorProps>`
  position: relative;
  display: block;
  flex: 1 0 auto;
  align-self: flex-start;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  border: ${({ border }) => border} solid ${colors.basic[300]};
  box-shadow: 0 -${Size.Border.Normal} 0 0 ${Color.gray.light} inset;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
    border-radius: 50%;
    content: "";
  }

  &::after {
    width: ${({ inside }) => inside};
    height: ${({ inside }) => inside};
    background: ${Color.background.default};
    transition-property: background;
  }

  input:checked + & {
    background: ${Color.primary.main};
    border-color: ${Color.primary.main};
    box-shadow: none;
  }
`;

export const Label = styled.span`
  flex: 0 1 auto;
  margin-left: ${Space * 0.25}px;
  font-size: 14px;
  line-height: 1;
`;

export type RadioButtonChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  checked: boolean,
) => void;

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange"
> & {
  size?: RadioButtonSize;
  children?: React.ReactNode;
  onChange?: RadioButtonChangeHandler;
  inputRef?: React.Ref<HTMLInputElement>;
};

export class RadioButton extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    size: RadioButtonSize.MEDIUM,
  };

  public render(): React.ReactNode {
    const {
      children,
      size,
      onChange: _onChange,
      inputRef,
      ...rest
    } = this.props;
    const radioButtonSize = size as RadioButtonSize;

    return (
      <Wrapper as={children == null ? "span" : "label"} size={radioButtonSize}>
        <input
          {...rest}
          ref={inputRef}
          type="radio"
          onChange={this.handleChange}
        />
        <Indicator
          size={radioButtonSize}
          {...indicatorSizes[radioButtonSize]}
        />
        {children != null ? <Label>{children}</Label> : null}
      </Wrapper>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e, e.target.checked);
    }
  };
}
