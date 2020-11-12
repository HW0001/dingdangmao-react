import NoteInput from "components/home/NoteInput";
import KeysPage from "components/home/KeysPage";
import RecordType from "components/home/RecordType";
import Tags from "components/home/Tags";
import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import useRecordItem from "hooks/useRecordItem";

const MainWrapping = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const defaultValue: RecordItem = {
  tags: [],
  notes: "",
  category: "-",
  amount: "0",
  recordAT: "",
};
const Home: React.FC = () => {
  const [record, setRecord] = useState(defaultValue);
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj,
    });
  };
  const { saveRecord } = useRecordItem();
  const saveInfo = () => {
    saveRecord({ ...record, recordAT: new Date().toISOString() });
    setRecord(defaultValue);
    alert("保存成功");
  };

  return (
    <Layout>
      <MainWrapping>
        <Tags
          value={record.tags}
          onChange={(tags) => {
            onChange({ tags });
          }}
        />
        <NoteInput
          value={record.notes}
          onChange={(notes) => {
            onChange({ notes });
          }}
        />
        <RecordType
          value={record.category}
          onChange={(category) => {
            onChange({ category });
          }}
        />
        <KeysPage
          value={record.amount}
          onChange={(amount) => {
            onChange({ amount });
          }}
          onSave={saveInfo}
        />
      </MainWrapping>
    </Layout>
  );
};

export default Home;
