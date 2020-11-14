import Layout from "components/Layout";
import React, { ChangeEvent } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useTags from "hooks/useTags";
import Icon from "components/Icon";
import Input from "components/Input";
import styled from "styled-components";
import IconsPage from "components/IconsPage";

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
  .del-wrapping {
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
    padding-top: 1em;
    .del-icon {
      width: 2em;
      height: 2em;
    }
  }
`;
const NotFound = styled.div`
  text-align: center;
  padding: 16px;
`;

const TagPage: React.FC = () => {
  const { id } = useParams<Params>();
  const { findTag, updateTag, deleteTag } = useTags();
  let tag = findTag(id);
  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    updateTag(id, (e.target as HTMLInputElement).value, "");
  };

  const onIconClick = (val: string) => {
    updateTag(id, "", val);
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
          <Input label="标签名" value={tag.name} onChange={onBlur} />
        </main>
        <IconsPage onClick={onIconClick} selected={tag.iconName || ""} />
        <div className="del-wrapping">
          <Icon className="del-icon" name="delete" onClick={delTag} />
        </div>
      </Wrappring>
    );
  };
  const notFound = () => {
    return (
      <NotFound>
        <span>未找到标签</span>
      </NotFound>
    );
  };
  return <Layout>{tag ? div() : notFound()}</Layout>;
};

export default TagPage;
