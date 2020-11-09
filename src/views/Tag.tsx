import FormInput from "components/home/FormInput";
import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { Link, useParams } from "react-router-dom";
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
`;

type Params = {
  id: string;
};

const Tag: React.FC = (props) => {
  const { id } = useParams<Params>();
  const { findTag, updateTag } = useTags();
  const tag = findTag(id);
  const onChange = (value: string) => {
    updateTag({
      id,
      name: tag.name,
    });
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
      </Wrappring>
    </Layout>
  );
};

export default Tag;
