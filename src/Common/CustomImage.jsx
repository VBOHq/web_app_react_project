import React from "react";
import { styled } from "styled-components";

const CustomImage = ({ src, alt, width, height }) => (
  <Image
    src={src ?? null}
    alt={alt ?? null}
    width={width}
    height={height}
    loading="lazy"
  />
);
const Image = styled.img`
  width: ${(props) => props.width ?? null};
  height: ${(props) => props.height ?? null};
`;

export default CustomImage;
