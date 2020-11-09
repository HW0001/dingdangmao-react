import { useState } from "react";

const useTags = () => {
  const [tags, setTags] = useState([
    { id: "1", name: "衣" },
    { id: "2", name: "食" },
    { id: "3", name: "住" },
    { id: "4", name: "行" },
  ]);
  const createTag = (tagName: string) => {
    const id = Math.max(...tags.map((t) => parseInt(t.id))) + 1;
    setTags([...tags, { id: id.toString(), name: tagName }]);
  };
  return {
    tags,
    setTags,
    createTag,
  };
};

export default useTags;
