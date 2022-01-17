import styled, { css } from "styled-components";
import classNames from "classnames";
import { flexbox } from "../../utilities";

//
// Styles

const CardGeneralStyles = css`
  padding: 1.5rem;
`;
const Header = styled.div`
  ${CardGeneralStyles}
  ${flexbox}
`;
const Body = styled.div`
  ${CardGeneralStyles}
  ${flexbox}
`;
const Footer = styled.div`
  ${CardGeneralStyles}
  ${flexbox}
`;
const Image = styled.img.attrs((props) => ({
  width: props.width ? props.width : null,
  height: props.height ? props.height : null
}))`
  display: block;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
const Link = styled("a")`
  font-weight: 500;
`;
const Text = styled.div`
  color: ${(props) => props.theme.color};
`;

//
// Card

const CardStyle = styled.div.attrs((props) => ({
  mb: props.mb
}))`
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  ${(props) =>
    props.theme &&
    `
    background-color: ${props.theme.card.bg};
  `}
  background-clip: border-box;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: ${(props) => props.mb};
`;
export const Card = ({ children, className, ...props }) => {
  return (
    <CardStyle className={classNames("card", className)} {...props}>
      {children}
    </CardStyle>
  );
};

//
// Card Header

Card.Header = function CardHeader({ className, children, ...props }) {
  return (
    <Header className={classNames("card-header", className)} {...props}>
      {children}
    </Header>
  );
};

//
// Card body

Card.Body = function CardBody({ className, children, ...props }) {
  return (
    <Body className={classNames("card-body", className)} {...props}>
      {children}
    </Body>
  );
};

//
// Card footer

Card.Footer = function CardFooter({ className, children, ...props }) {
  return (
    <Footer className={classNames("card-image", className)} {...props}>
      {children}
    </Footer>
  );
};

//
// Card text

Card.Text = function CardText({ className, children, ...props }) {
  return (
    <Text className={classNames("card-text", className)} {...props}>
      {children}
    </Text>
  );
};

//
// Card image

Card.Image = function CardImage({ className, children, ...props }) {
  return (
    <Image className={classNames("card-image", className)} {...props}>
      {children}
    </Image>
  );
};

//
// Card link

Card.Link = function CardLink({ className, children, ...props }) {
  return (
    <Link className={classNames("card-link", className)} {...props}>
      {children}
    </Link>
  );
};
