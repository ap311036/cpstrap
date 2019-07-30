import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

const defaultProps = {
  tag: "div"
};

const TabList = props => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  const { className, tag: Tag, children, ...attributes } = props;
  const classes = classNames(className, "tab-list");
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  );
};

TabList.propTypes = propTypes;
TabList.defaultProps = defaultProps;


export default TabList;
