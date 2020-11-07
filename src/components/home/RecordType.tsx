import React from "react";
import styled from "styled-components";

const TypeSection = styled.section`
  ul {
    background-color: rgb(196, 196, 196);
    li {
      display: inline-block;
      width: 50%;
      text-align: center;
      font-size: 24px;
      line-height: 64px;
      &.selected {
        position: relative;
      }
      &.selected::after {
        content: "";
        width: 100%;
        height: 4px;
        background-color: #000;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
`;

const RecordType = () => {
  return (
    <TypeSection>
      <ul>
        <li className="selected">支出</li>
        <li>收入</li>
      </ul>
    </TypeSection>
  );
};

export default RecordType;
