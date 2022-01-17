import styled from "styled-components";
import classNames from "classnames";

export const ImageStyled = styled.img`
  display: block;
  width: 100%;
`

export const Image = ({ src, className, alt,  ...props }) => {

  const classConfig = classNames({
    'card-image': true,
    [`${ className }`]: className
  })
  return(
    <ImageStyled src={ src } className={ classNames( classConfig )} alt={alt} {...props }></ImageStyled>
  )
}

