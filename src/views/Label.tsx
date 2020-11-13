import CenterButton from "components/CenterButton";
import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useTags from "hooks/useTags";

const Wrapping = styled.main`
  font-size: 16px;
  > ol {
    padding: 0 16px;
    > li {
      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
      }
    }
  }
`;

const Label = () => {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <Wrapping>
        <ol>
          {tags.map((t) => {
            return (
              <li key={t.id}>
                <Link to={`labels/${t.id}`}>
                  <span>{t.name}</span>
                  <Icon name="right" />
                </Link>
              </li>
            );
          })}
        </ol>
        <CenterButton onClick={addTag}>新增标签</CenterButton>
      </Wrapping>
    </Layout>
  );
};

export default Label;
