import React, { useEffect, useState } from "react";
import Icon from "./Icon";

const IconsPage = () => {
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
    <div>
      <ul>
        {icons.length > 0 &&
          icons.map((i) => {
            {
              return <Icon name={i} path="icons/tagicons/" />;
            }
          })}
      </ul>
    </div>
  );
};

export default IconsPage;
