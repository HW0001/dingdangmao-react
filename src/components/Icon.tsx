import React from "react";
import styled from "styled-components";

type IconProps = {
  name: string;
  path?: string;
};

const Svg = styled.svg`
  width: 1em;
  height: 1em;
`;
const Icon = (props: IconProps) => {
  if (props.path) {
    require("../" + props.path + props.name + ".svg");
  } else {
    require("icons/" + props.name + ".svg");
  }
  return (
    <Svg className="icon">
      <use xlinkHref={"#" + props.name}></use>
    </Svg>
  );
};

export default Icon;
