import React from "react";
import styled from "styled-components";
import useTags from "hooks/useTags";

const TagsSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0 16px;
  ul {
    padding-bottom: 8px;
    li {
      display: inline-block;
      font-size: 14px;
      background-color: rgb(217, 217, 217);
      border-radius: 18px;
      padding: 0 16px;
      margin-right: 16px;
      margin-top: 8px;
      &.selected {
        background-color: rgb(117, 117, 117);
      }
    }
  }
`;
type Props = {
  value: string[];
  onChange: (val: string[]) => void;
};
const Tags: React.FC<Props> = (props) => {
  const { tags } = useTags();
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
    </TagsSection>
  );
};
export default Tags;
