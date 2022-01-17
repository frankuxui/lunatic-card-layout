import React from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'

export const layout = css`
  width: ${ props => props.width };
  max-width: ${ props => props.maxWidth };
  min-width: ${ props => props.minWidth };
  min-width: ${ props => props.minWidth };
  height: ${ props => props.height };
  max-height: ${ props => props.maxHeight };
  min-height: ${ props => props.minHeight };
  overflow: ${ props => props.overflow };
  overflow-x: ${ props => props.overflowX };
  overflow-y: ${ props => props.overflowY };
`
export const position = css`
  z-index: ${ props => props.zIndex };
  position: ${ props => props.position };
  top: ${ props => props.top };
  right: ${ props => props.right };
  bottom: ${ props => props.bottom };
  left: ${ props => props.left };
`
export const border = css`
  border: ${ props => props.border };
  border-top: ${ props => props.borderTop };
  border-right: ${ props => props.borderRight };
  border-bottom: ${ props => props.borderBottom };
  border-left: ${ props => props.borderLeft };
  border-width: ${ props => props.borderWidth };
  border-style: ${ props => props.borderStyle };
  border-color: ${ props => props.borderColor };
  border-radius: ${ props => props.borderRadius };

`
export const flexbox = css`
  display: ${ props => props.display };
  align-items: ${ props => props.alignItems };
  align-content: ${ props => props.alignContent };
  justify-content: ${ props => props.justifyContent };
  flex-wrap: ${ props => props.flexWrap };
  flex-basis: ${ props => props.flexBasis };
  flex-direction: ${ props => props.flexDirection };
  flex: ${ props => props.flex };
  justify-self: ${ props => props.justifySelf };
  align-self: ${ props => props.alignSelf };
  order: ${ props => props.order };
`
export const space = css`
  padding: ${ props => props.p };
  padding-top: ${ props => props.pt };
  padding-bottom: ${ props => props.pb };
  padding-right: ${ props => props.pr };
  padding-left: ${ props => props.pl };
  margin: ${ props => props.m };
  margin-top: ${ props => props.mt };
  margin-bottom: ${ props => props.mb };
  margin-right: ${ props  => props.mr };
  margin-left: ${ props => props.ml };
`
export const background = css`
  background-color: ${ props => props.bg };
  background-image: ${ props => props.backgroundImage };
  background-size: ${ props => props.backgroundSize };
  background-position: ${ props => props.backgroundPosition };
  background-repeat: ${ props => props.backgroundRepeat };
`
export const color = css`
  color: ${ props => props.color };
`
export const typography = css`
  font-size: ${ props => props.fontSize };
  font-family: ${ props => props.fontFamily };
  font-weight: ${ props => props.fontWeight };
  line-height: ${ props => props.lineHeight };
  letter-spacing: ${ props => props.letterSpacing };
  text-align: ${ props => props.textAlign };
`

const BoxStyled = styled('div').attrs()`
  ${layout}
  ${position}
  ${flexbox}
  ${background}
  ${color}
  ${border}
  ${space}
  ${typography}
`

export const Box = ({ className, children, ...props }) => {
  const classConfig = classNames({
    [`${ className }`]: className
  })
  return(
    <BoxStyled className={ classNames(classConfig)} {...props }>
      { children }
    </BoxStyled>
  )
}