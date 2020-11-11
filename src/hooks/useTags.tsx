import { useEffect, useRef, useState } from "react";
import useUpdate from "./useUpdate";

const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const txt = JSON.parse(localStorage.getItem("tag-items") || "[]");
    setTags(txt);
  }, []);

  useUpdate(() => {
    localStorage.setItem("tag-items", JSON.stringify(tags));
  }, [tags]);

  const createTag = (tagName: string) => {
    const id =
      tags.length > 0 ? Math.max(...tags.map((t) => parseInt(t.id))) + 1 : 1;
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
    return tags.length > 0
      ? filterTag(id.toString(), "=")[0]
      : ({ id: "", name: "" } as Tag);
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
    setTags(tags.filter((tag) => tag.id !== tagID));
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
