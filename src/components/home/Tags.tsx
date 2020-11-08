import React, { useState } from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
      &.selected {
        background-color: rgb(117, 117, 117);
      }
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
  const [tags, setTags] = useState(["衣", "食", "住", "行"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tagClick = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index > -1) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const addTag = () => {
    const tag = window.prompt("请输入标签！");
    if (tag) {
      if (tags.indexOf(tag) > -1) return alert("标签已存在");
      setTags([...tags, tag]);
    }
  };
  return (
    <TagsSection>
      <ul>
        {tags.map((t) => {
          return (
            <li
              key={t}
              onClick={() => {
                tagClick(t);
              }}
              className={selectedTags.indexOf(t) > -1 ? "selected" : ""}
            >
              {t}
            </li>
          );
        })}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </TagsSection>
  );
};
export default Tags;
