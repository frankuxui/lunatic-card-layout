import styled from "styled-components";

export const Toggle = styled.button`
  width: 4rem;
  height: 4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${( props ) => props.theme.card.bg};
  border-radius: 50%;
  border: 0;
`