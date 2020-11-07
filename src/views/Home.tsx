import FormInput from "components/home/FormInput";
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

const KeysSection = styled.section`
  li {
    display: inline-block;
  }
`;

const Home = () => {
  return (
    <Layout>
      <MainWrapping>
        <Tags />
        <FormInput />
        <RecordType />
        <KeysSection>
          <input type="text" />
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>删除</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>清空</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>ok</li>
            <li>0</li>
            <li>.</li>
          </ul>
        </KeysSection>
      </MainWrapping>
    </Layout>
  );
};

export default Home;
