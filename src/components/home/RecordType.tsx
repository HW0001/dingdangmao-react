import React, { useState } from "react";
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

type Props = {
  value: "-" | "+";
  onChange: (val: "-" | "+") => void;
};
const RecordType: React.FC<Props> = (props) => {
  const category = { "-": "支出", "+": "收入" };
  const [categoryList] = useState<("-" | "+")[]>(["-", "+"]);
  const currGategory = props.value;
  return (
    <TypeSection>
      <ul>
        {categoryList.map((c) => {
          return (
            <li
              className={currGategory === c ? "selected" : ""}
              onClick={() => {
                props.onChange(c);
              }}
              key={category[c]}
            >
              {category[c]}
            </li>
          );
        })}
      </ul>
    </TypeSection>
  );
};

export default RecordType;
