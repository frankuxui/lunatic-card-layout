import styled from "styled-components";

export const Badge = styled.span.attrs(( props ) => ({
  online: props.online ? props.online : ''
}))`

  width: 20px;
  height: 20px;
  display: inline-block;
  position: absolute;
  bottom: -3px;
  right: -4px;
  border-radius: 50%;
  border: 4px solid ${( props ) => props.theme.card.bg };
  background-color: ${( props ) => props.online ? '#00c579' : '#838383'};
`;