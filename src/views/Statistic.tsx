import LineChart from "components/charts/LineChart";
import RecordType from "components/home/RecordType";
import Layout from "components/Layout";
import RecordItemList from "components/statistic/RecordItemList";
import dayjs from "dayjs";
import React, { useState } from "react";

const Statistic = () => {
  const [cordType, setCordType] = useState<"-" | "+">("-");
  const onChange = (val: "-" | "+") => {
    setCordType(val);
  };
  const getDates = () => {
    const arr: string[] = [];
    const current = dayjs();
    for (let i = 0; i < 7; i++) {
      arr.push(current.subtract(i, "d").format("M.D"));
    }
    return arr;
  };

  return (
    <Layout>
      <RecordType value={cordType} onChange={onChange} />
      <LineChart title={cordType === "-" ? 0 : 1} xaxis={getDates()} />
      <RecordItemList cordtype={cordType} />
    </Layout>
  );
};

export default Statistic;
