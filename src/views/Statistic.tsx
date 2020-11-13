import LineChart from "components/charts/LineChart";
import RecordType from "components/home/RecordType";
import Layout from "components/Layout";
import RecordItemList from "components/statistic/RecordItemList";
import dayjs from "dayjs";
import useRecordItem from "hooks/useRecordItem";
import React, { useState } from "react";

const Statistic = () => {
  const [cordType, setCordType] = useState<"-" | "+">("-");
  const { recordItems } = useRecordItem();
  const onChange = (val: "-" | "+") => {
    setCordType(val);
  };

  const getDates = () => {
    const arr: string[] = [];
    const current = dayjs();
    for (let i = 6; i >= 0; i--) {
      arr.push(current.subtract(i, "d").format("M.D"));
    }
    return arr;
  };
  const getData = () => {
    const currentItems = recordItems.filter((r) =>
      dayjs(r.recordAT).isAfter(dayjs().subtract(7, "d"), "d")
    );
    const result: number[] = [];
    for (let i = 6; i >= 0; i--) {
      const arr = currentItems.filter((r) => {
        const current = dayjs().subtract(i, "d");
        console.log(current.toISOString());
        return dayjs(r.recordAT).isSame(current, "d");
      });

      result.push(
        arr.length > 0 ? arr.reduce((p, c) => p + parseFloat(c.amount), 0) : 0
      );
    }

    return result;
  };
  return (
    <Layout>
      <RecordType value={cordType} onChange={onChange} />
      <LineChart
        title={cordType === "-" ? 0 : 1}
        xaxis={getDates()}
        data={getData()}
      />
      <RecordItemList cordtype={cordType} />
    </Layout>
  );
};

export default Statistic;
