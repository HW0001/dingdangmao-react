import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";

const MainWrapping = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TagsSection = styled.section`
  padding: 16px;
  ul {
    padding-bottom: 8px;
    li {
      display: inline-block;
      font-size: 14px;
      background-color: rgb(217, 217, 217);
      border-radius: 18px;
      padding: 0 16px;
      margin-right: 16px;
    }
  }

  button {
    border: none;
    background-color: #fff;
    padding: 0 4px;
    border-bottom: 1px solid #000;
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
      <MainWrapping>
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
