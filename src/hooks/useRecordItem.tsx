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
  const getDataInSevenDay = (type: "-" | "+") => {
    const currentItems = recordItems.filter(
      (r) =>
        r.category === type &&
        dayjs(r.recordAT).isAfter(dayjs().subtract(7, "d"), "d")
    );
    const result: number[] = [];
    for (let i = 6; i >= 0; i--) {
      const arr = currentItems.filter((r) => {
        const current = dayjs().subtract(i, "d");
        return dayjs(r.recordAT).isSame(current, "d");
      });

      result.push(
        arr.length > 0 ? arr.reduce((p, c) => p + parseFloat(c.amount), 0) : 0
      );
    }

    return result;
  };

  return {
    recordItems,
    saveRecord,
    getGroupedTags,
    getDataInSevenDay,
  };
};

export default useRecordItem;
