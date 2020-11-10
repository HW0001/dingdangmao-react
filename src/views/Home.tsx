import NoteInput from "components/home/NoteInput";
import KeysPage from "components/home/KeysPage";
import RecordType from "components/home/RecordType";
import Tags from "components/home/Tags";
import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";

const MainWrapping = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Home: React.FC = () => {
  const [record, setRecord] = useState({
    tags: [] as string[],
    notes: "",
    category: "-" as "-" | "+",
    amount: "0",
  });

  const onChange = (obj: Partial<typeof record>) => {
    setRecord({
      ...record,
      ...obj,
    });
  };
  const saveRecord = () => {
    setRecord({
      tags: [] as string[],
      notes: "",
      category: "-" as "-" | "+",
      amount: "0",
    });
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
          onSave={saveRecord}
        />
      </MainWrapping>
    </Layout>
  );
};

export default Home;
