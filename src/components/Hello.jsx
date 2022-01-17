import React from "react";
import styled from 'styled-components';

const HelloStyled = styled.h3`
  text-align: center;
  padding-top: 3rem;
  color: ${( props ) => props.theme.color };
`

const Hello = () => {
  return <HelloStyled>Card layout</HelloStyled>;
};

export default Hello;
