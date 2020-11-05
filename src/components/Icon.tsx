import React from "react";
import styled from "styled-components";

type IconProps = {
  name: string;
};

const Svg = styled.svg`
  width: 1em;
  height: 1em;
`;
const Icon = (props: IconProps) => {
  require("icons/" + props.name + ".svg");
  return (
    <Svg>
      <use xlinkHref={"#" + props.name}></use>
    </Svg>
  );
};

export default Icon;
