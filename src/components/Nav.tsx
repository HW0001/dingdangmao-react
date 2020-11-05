import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapping = styled.nav`
  ul {
    display: flex;
    li {
      width: 33.333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
const Nav = () => {
  return (
    <Wrapping>
      <ul>
        <li>
          <Icon name="home"></Icon>
          <Link to="/home">账本</Link>
        </li>
        <li>
          <Icon name="label"></Icon>
          <Link to="/labels">标签</Link>
        </li>
        <li>
          <Icon name="chart"></Icon>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </Wrapping>
  );
};

export default Nav;
