import React from "react";
import styled from "styled-components";
var classNames = require("classnames");

type IconProps = {
  name: string;
  path?: string;
  className?: string;
  onClick?: () => void;
};

const Svg = styled.svg`
  width: 1em;
  height: 1em;
`;
const Icon: React.FC<IconProps> = (props) => {
  if (props.path) {
    require("icons/" + props.path + props.name + ".svg");
  } else {
    require("icons/" + props.name + ".svg");
  }
  return (
    <Svg
      className={classNames("icon", props.className)}
      onClick={props.onClick}
    >
      <use xlinkHref={"#" + props.name}></use>
    </Svg>
  );
};

export default Icon;
