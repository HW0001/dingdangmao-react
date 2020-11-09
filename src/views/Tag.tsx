import FormInput from "components/home/FormInput";
import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import useTags from "useTags";

const Wrappring = styled.div`
  font-size: 16px;
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    position: relative;
    .icon {
      position: absolute;
      top: 1em;
      left: 1em;
      width: 1.5em;
      height: 1.5em;
    }
  }
  main {
    padding: 4px 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  button {
    display: block;
    font-size: 16px;
    padding: 8px 16px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    background-color: rgb(118, 118, 118);
    color: white;
    border: none;
  }
`;

type Params = {
  id: string;
};

const Tag: React.FC = (props) => {
  const { id } = useParams<Params>();
  const { findTag, updateTag, deleteTag } = useTags();
  let tag = findTag(id);
  const history = useHistory();
  const onChange = (value: string) => {
    updateTag({
      id,
      name: value,
    });
  };
  const delTag = () => {
    if (window.confirm("是否删除该标签？")) {
      deleteTag(id);
      history.replace("/labels");
    }
  };
  return (
    <Layout>
      <Wrappring>
        <header>
          <Link to="/labels">
            <Icon name="left" />
          </Link>
          <span>编辑标签</span>
        </header>
        <main>
          <FormInput value={tag.name} onChange={onChange} />
        </main>
        <button onClick={delTag}>删除标签</button>
      </Wrappring>
    </Layout>
  );
};

export default Tag;
