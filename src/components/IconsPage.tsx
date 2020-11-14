import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapping = styled.div`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 2em;
      height: 4em;
      margin-left: 1.5em;
      margin-top: 1em;
      .icon {
        width: 2em;
        height: 2em;
      }
    }
  }
`;

type Props = {
  selected: string;
  onClick: (val: string) => void;
};
const IconsPage: React.FC<Props> = (props) => {
  const [icons, setIcons] = useState<string[]>([]);
  useEffect(() => {
    setIcons(getIconsName());
  }, []);

  const getIconsName = () => {
    const leng = 22;
    const arr: string[] = [];
    const leftstr = "icon_";
    for (let i = 1; i <= leng; i++) {
      arr.push(leftstr + ("000" + i).slice(-2));
    }
    return arr;
  };

  return (
    <Wrapping>
      <ul>
        {icons.length > 0 &&
          icons.map((i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  props.onClick(i);
                }}
              >
                {" "}
                <Icon name={i} path="tagicons/" />
                {i === props.selected ? <Icon name="checked" /> : ""}
              </li>
            );
          })}
      </ul>
    </Wrapping>
  );
};

export default IconsPage;
