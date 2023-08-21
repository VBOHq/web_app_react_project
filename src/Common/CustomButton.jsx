import React from "react";
import { styled } from "styled-components";

const CustomButton = ({
  width,
  height,
  backgroundColor,
  color,
  text,
  otherStyles,
  otherProps,
}) => {
  return (
    <Button
      style={{
        width: width ?? null,
        height: height ?? null,

        backgroundColor: backgroundColor
          ? backgroundColor
          : backgroundColor === "useDefault"
          ? "var(--primaryColor)"
          : null,
        color: color
          ? color
          : color === "useDefault"
          ? "var(--cardColor)"
          : null,
        ...otherStyles,
      }}
      {...otherProps}
    >
      {text}
    </Button>
  );
};

const Button = styled.button`
  width: ${(props) => props?.width ?? "100%"};
  height: ${(props) => props?.height ?? "100%"};
  border: none;
  outline: none;
  border-radius: 0.5rem;
  text-transform: capitalize;
  cursor: pointer;
  small {
    text-transform: lowercase;
  }
`;
export default CustomButton;
