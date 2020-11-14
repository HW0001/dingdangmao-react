import React from "react";
import styled from "styled-components";
import SelectedTagsIcon from "components/SelectedTagsIcon";

const TagsSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  li {
    font-size: 14px;
    &.selected {
      transform: scale(1.2);
      color: rgb(230, 182, 115);
      font-weight: 600;
    }
    .icon {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;
type Props = {
  value: string[];
  onChange: (val: string[]) => void;
};
const Tags: React.FC<Props> = (props) => {
  const selectedTags = props.value;
  const itemClick = (id: string) => {
    const index = selectedTags.indexOf(id);
    if (index > -1) {
      props.onChange(selectedTags.filter((t) => t !== id));
    } else {
      props.onChange([...selectedTags, id]);
    }
  };
  return (
    <TagsSection>
      <SelectedTagsIcon onIconClick={itemClick} selectedID={selectedTags} />
    </TagsSection>
  );
};
export default Tags;
