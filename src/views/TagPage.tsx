import Layout from "components/Layout";
import React, { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useTags from "hooks/useTags";
import CenterButton from "components/CenterButton";
import Icon from "components/Icon";
import Input from "components/Input";
import styled from "styled-components";

type Params = {
  id: string;
};
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
`;
const TagPage: React.FC = () => {
  const { id } = useParams<Params>();
  const { findTag, updateTag, deleteTag } = useTags();
  let tag = findTag(id);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTag({
      id,
      name: (e.target as HTMLInputElement).value,
    });
  };
  const history = useHistory();
  const delTag = () => {
    if (window.confirm("是否删除该标签？")) {
      deleteTag(id);
      history.goBack();
    }
  };
  const div = () => {
    return (
      <Wrappring>
        <header>
          <Link to="/labels">
            <Icon name="left" />
          </Link>
          <span>编辑标签</span>
        </header>
        <main>
          <Input label="标签名" value={tag.name} onChange={onChange} />
        </main>
        <CenterButton onClick={delTag}>删除标签</CenterButton>
      </Wrappring>
    );
  };

  return <Layout>{tag ? div() : <div>未找到标签</div>}</Layout>;
};

export default TagPage;
