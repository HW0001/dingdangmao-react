import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const TagsSection = styled.section`
  li {
    display: inline-block;
  }
`;

const NotesSection = styled.section``;
const TypeSection = styled.section`
  li {
    display: inline-block;
  }
`;
const KeysSection = styled.section`
  li {
    display: inline-block;
  }
`;

const Home = () => {
  return (
    <Layout>
      <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          备注:
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </NotesSection>
      <TypeSection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </TypeSection>
      <KeysSection>
        <input type="text" />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </KeysSection>
    </Layout>
  );
};

export default Home;
