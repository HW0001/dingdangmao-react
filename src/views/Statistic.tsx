import RecordType from "components/home/RecordType";
import Layout from "components/Layout";
import RecordItemList from "components/statistic/RecordItemList";
import React, { useState } from "react";

const Statistic = () => {
  const [cordType, setCordType] = useState<"-" | "+">("-");
  const onChange = (val: "-" | "+") => {
    setCordType(val);
  };
  return (
    <Layout>
      <RecordType value={cordType} onChange={onChange} />
      <RecordItemList cordtype={cordType} />
    </Layout>
  );
};

export default Statistic;
