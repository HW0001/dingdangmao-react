import LineChart from "components/charts/LineChart";
import EmptyLine from "components/EmptyLine";
import RecordType from "components/home/RecordType";
import Layout from "components/Layout";
import RecordItemList from "components/statistic/RecordItemList";
import dayjs from "dayjs";
import useRecordItem from "hooks/useRecordItem";
import React, { useState } from "react";

const Statistic = () => {
  const [cordType, setCordType] = useState<"-" | "+">("-");
  const { getDataInSevenDay } = useRecordItem();

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

  const getTitle = () => {
    return cordType === "-" ? "近七日支出" : "近七日收入";
  };
  return (
    <Layout>
      <RecordType value={cordType} onChange={onChange} />
      <EmptyLine />
      <LineChart
        title={getTitle()}
        xaxis={getDates()}
        data={getDataInSevenDay(cordType)}
      />
      <RecordItemList cordtype={cordType} />
    </Layout>
  );
};

export default Statistic;
