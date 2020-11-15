import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapping = styled.nav`
  ul {
    display: flex;
    li {
      width: 33.333%;
      div {
        text-align: center;
        a {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          &.selected {
            border: none;
            border-radius: 50%;
            height: 56px;
            width: 56px;
            background-color: rgb(255, 189, 39);
            .icon {
              transform: scale(1.4);
            }
            span {
              display: none;
            }
          }
          .icon {
            width: 2em;
            height: 2em;
          }
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
          <div>
            <NavLink to="/labels" activeClassName="selected">
              <Icon name="label"></Icon>
              <span>标签</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink to="/home" activeClassName="selected">
              <Icon name="home"></Icon>
              <span>账本</span>
            </NavLink>
          </div>
        </li>
        <li>
          <div>
            <NavLink to="/statistics" activeClassName="selected">
              <Icon name="chart"></Icon>
              <span>统计</span>
            </NavLink>
          </div>
        </li>
      </ul>
    </Wrapping>
  );
};

export default Nav;
