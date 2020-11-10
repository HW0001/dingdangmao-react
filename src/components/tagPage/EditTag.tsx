import CenterButton from "components/CenterButton";
import Icon from "components/Icon";
import Input from "components/Input";
import React, { ChangeEvent } from "react";
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
`;

type Params = {
  id: string;
};

const EditTag: React.FC = (props) => {
  const { id } = useParams<Params>();
  const { findTag, updateTag, deleteTag } = useTags();
  let tag = findTag(id);
  const history = useHistory();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTag({
      id,
      name: (e.target as HTMLInputElement).value,
    });
  };
  const delTag = () => {
    if (window.confirm("是否删除该标签？")) {
      deleteTag(id);
      history.replace("/labels");
    }
  };
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

export default EditTag;
