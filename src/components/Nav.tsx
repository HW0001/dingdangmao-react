import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapping = styled.nav`
  ul {
    display: flex;
    li {
      width: 33.333%;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 2em;
          height: 2em;
        }
      }
    }
  }
`;
const Nav = () => {
  return (
    <Wrapping>
      <ul>
        <li>
          <Link to="/home">
            <Icon name="home"></Icon>
            <span>账本</span>
          </Link>
        </li>
        <li>
          <Link to="/labels">
            <Icon name="label"></Icon>
            <span>标签</span>
          </Link>
        </li>
        <li>
          <Link to="/statistics">
            <Icon name="chart"></Icon>
            <span>统计</span>
          </Link>
        </li>
      </ul>
    </Wrapping>
  );
};

export default Nav;
