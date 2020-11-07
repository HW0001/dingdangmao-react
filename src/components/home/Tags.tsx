import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  padding: 16px;
  ul {
    padding-bottom: 8px;
    li {
      display: inline-block;
      font-size: 14px;
      background-color: rgb(217, 217, 217);
      border-radius: 18px;
      padding: 0 16px;
      margin-right: 16px;
    }
  }

  button {
    border: none;
    background-color: #fff;
    padding: 0 4px;
    border-bottom: 1px solid #000;
  }
`;

const Tags = () => {
  return (
    <TagsSection>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <button>新增标签</button>
    </TagsSection>
  );
};
export default Tags;
