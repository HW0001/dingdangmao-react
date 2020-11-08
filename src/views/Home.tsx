import FormInput from "components/home/FormInput";
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

const Home = () => {
  const [record, setRecord] = useState({
    tags: [] as string[],
    notes: "",
    category: "-" as "-" | "+",
    amount: "0",
  });

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
          onChange={(tags: string[]) => {
            setRecord({
              ...record,
              tags: tags,
            });
          }}
        />
        <FormInput
          value={record.notes}
          onChange={(note: string) => {
            setRecord({
              ...record,
              notes: note,
            });
          }}
        />
        <RecordType
          value={record.category}
          onChange={(category: "-" | "+") => {
            setRecord({
              ...record,
              category: category,
            });
          }}
        />
        <KeysPage
          value={record.amount}
          onChange={(amount: string) => {
            setRecord({
              ...record,
              amount: amount,
            });
          }}
          onSave={saveRecord}
        />
      </MainWrapping>
    </Layout>
  );
};

export default Home;
