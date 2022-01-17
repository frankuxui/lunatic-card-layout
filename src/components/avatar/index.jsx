import React from "react";
import classNames from "classnames";
import styled from "styled-components";

// Avatar styled
const AvatarStyled = styled.img`
  ${({ radius }) => radius && `border-radius: 50%`}
`;

// Avatar component to export
export const Avatar = ({ src, alt, className, size, radius }) => {
  const classConfig = classNames({
    [`${Avatar.defaultProps.className}`]: true,
    [`${className}`]: className
  });
  return (
    <AvatarStyled
      radius={radius}
      src={src}
      alt={alt}
      className={classNames(classConfig)}
      width={size ? size : Avatar.defaultProps.size}
      height={size ? size : Avatar.defaultProps.size}
    />
  );
};

// Avatar config props

Avatar.defaultProps = {
  size: "60",
  className: "avatar"
};