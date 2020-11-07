import FormInput from "components/home/FormInput";
import KeysPage from "components/home/KeysPage";
import RecordType from "components/home/RecordType";
import Tags from "components/home/Tags";
import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const MainWrapping = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Home = () => {
  return (
    <Layout>
      <MainWrapping>
        <Tags />
        <FormInput />
        <RecordType />
        <KeysPage />
      </MainWrapping>
    </Layout>
  );
};

export default Home;
