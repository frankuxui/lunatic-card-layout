import React from "react";
import PropTypes from "prop-types";

const tagsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  b: "b",
  div: "div",
  span: "span",
  li: "li",
  small: "small",
  strong: "strong",
  cite: "cite",
  del: "del",
  label: "label",
  em: "em",
  i: "i"
};

const Typography = ({ tag, color, className, children, ...props }) => {
  const DEFAULT_TAG = "p";
  const Component = tag ? tagsMapping[tag] : DEFAULT_TAG; // p default
  
  return (
    <Component className={ className }{...props} style={{ color: `${color}` }}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  tag: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Typography;
