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
  const filterTag = (id: string, type: "=" | "!") => {
    if (type === "!") return tags.filter((t) => t.id !== id);
    else return tags.filter((t) => t.id === id);
  };
  const findTag = (id: string) => {
    return filterTag(id, "=")[0];
  };
  const findTagIndex = (id: string) => {
    return tags.findIndex((t) => t.id === id);
  };
  const updateTag = (tag: Tag) => {
    const newTags: Tag[] = JSON.parse(JSON.stringify(tags));
    newTags.splice(findTagIndex(tag.id), 1, tag);
    setTags(newTags);
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
  };
};

export default useTags;
