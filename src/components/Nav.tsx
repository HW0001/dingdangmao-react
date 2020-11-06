import React from "react";
import { NavLink } from "react-router-dom";
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
        &.selected {
          color: red;
          &.icon {
            fill: red;
          }
        }
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
          <NavLink to="/labels" activeClassName="selected">
            <Icon name="label"></Icon>
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" activeClassName="selected">
            <Icon name="home"></Icon>
            <span>账本</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"></Icon>
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </Wrapping>
  );
};

export default Nav;
