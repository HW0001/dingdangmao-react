import { useState } from "react";
const alltag = [
  { id: "1", name: "衣" },
  { id: "2", name: "食" },
  { id: "3", name: "住" },
  { id: "4", name: "行" },
];
const useTags = () => {
  const [tags, setTags] = useState<Tag[]>(alltag);
  const createTag = (tagName: string) => {
    const id = Math.max(...tags.map((t) => parseInt(t.id))) + 1;
    setTags([...tags, { id: id.toString(), name: tagName }]);
  };
  const addTag = () => {
    const tagName = window.prompt("请输入标签！");
    if (tagName) {
      if (tags.some((t) => t.name === tagName)) return alert("标签已存在");
      createTag(tagName);
    }
  };
  const filterTag = (id: string, type: "=" | "!") => {
    if (type === "!") return tags.filter((t) => t.id !== id);
    else return tags.filter((t) => t.id === id);
  };
  const findTag = (id: string) => {
    return filterTag(id, "=")[0];
  };
  const updateTag = (tag: Tag) => {
    setTags(
      tags.map((t) => {
        t.id === tag.id && (t.name = tag.name);
        return t;
      })
    );
  };
  const deleteTag = (tagID: string) => {
    setTags([...filterTag(tagID, "!")]);
  };
  return {
    tags,
    setTags,
    createTag,
    findTag,
    updateTag,
    deleteTag,
    addTag,
  };
};

export default useTags;
