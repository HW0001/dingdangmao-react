import React from "react";
import styled from "styled-components";
import useTags from "hooks/useTags";

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
type Props = {
  value: string[];
  onChange: (val: string[]) => void;
};
const Tags: React.FC<Props> = (props) => {
  const { tags, addTag } = useTags();
  const selectedTags = props.value;
  const tagClick = (tagid: string) => {
    const index = selectedTags.indexOf(tagid);
    if (index > -1) {
      props.onChange(selectedTags.filter((t) => t !== tagid));
    } else {
      props.onChange([...selectedTags, tagid]);
    }
  };

  return (
    <TagsSection>
      <ul>
        {tags.map((t) => {
          return (
            <li
              key={t.id}
              onClick={() => {
                tagClick(t.id);
              }}
              className={selectedTags.indexOf(t.id) > -1 ? "selected" : ""}
            >
              {t.name}
            </li>
          );
        })}
      </ul>
      <button onClick={addTag}>新增标签</button>
    </TagsSection>
  );
};
export default Tags;
