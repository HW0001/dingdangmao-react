import { useEffect, useState } from "react";
import useUpdate from "./useUpdate";

const useRecordItem = () => {
  const [recordItems, setRecordItems] = useState<RecordItem[]>([]);

  useEffect(() => {
    const txt = JSON.parse(localStorage.getItem("record-items") || "[]");
    setRecordItems(txt);
  }, []);

  useUpdate(() => {
    localStorage.setItem("record-items", JSON.stringify(recordItems));
  }, [recordItems]);

  const saveRecord = (item: RecordItem) => {
    setRecordItems([...recordItems, item]);
  };
  return {
    recordItems,
    saveRecord,
  };
};

export default useRecordItem;
