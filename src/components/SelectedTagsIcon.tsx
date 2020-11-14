import useTags from "hooks/useTags";
import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapping = styled.ol`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-left: 1.5em;
    margin-top: 1em;
    .icon {
      width: 2em;
      height: 2em;
    }
  }
`;
type Props = {
  onIconClick: (name: string) => void;
  selectedID?: string[];
};

const SelectedTagsIcon: React.FC<Props> = (props) => {
  const { tags } = useTags();
  return (
    <Wrapping>
      {tags.map((t) => {
        return (
          <li
            key={t.id}
            className={
              props.selectedID && props.selectedID.indexOf(t.id) > -1
                ? "selected"
                : ""
            }
          >
            {t.iconName ? (
              <Icon
                onClick={() => {
                  props.onIconClick(t.id);
                }}
                name={t.iconName}
                path="tagicons/"
              />
            ) : (
              ""
            )}
            <span>{t.name || "无"}</span>
          </li>
        );
      })}
    </Wrapping>
  );
};
export default SelectedTagsIcon;
