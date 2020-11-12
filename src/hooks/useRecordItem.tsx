import { useEffect, useState } from "react";
import useUpdate from "./useUpdate";
import dayjs from "dayjs";
import { clone } from "lib/tools";

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
    setRecordItems([
      ...recordItems,
      {
        ...item,
        amount: parseFloat(item.amount).toString(),
      },
    ]);
  };
  const getGroupedTags = (cordtype: "-" | "+") => {
    const arr: { itemKey: string; total: number; items: RecordItem[] }[] = [];
    const newtags = clone(recordItems.filter((e) => e.category === cordtype));
    newtags.sort(
      (a, b) => dayjs(b.recordAT).valueOf() - dayjs(a.recordAT).valueOf()
    );
    newtags.forEach((n) => {
      const date = dayjs(n.recordAT).format("YYYYMMDD");
      const lasitem = arr[arr.length - 1];
      if (lasitem && lasitem.itemKey === date) {
        lasitem.total += parseFloat(n.amount);
        lasitem.items.push(n);
      } else {
        arr.push({
          itemKey: date,
          total: parseFloat(n.amount),
          items: [n],
        });
      }
    });
    return arr;
  };
  return {
    recordItems,
    saveRecord,
    getGroupedTags,
  };
};

export default useRecordItem;
