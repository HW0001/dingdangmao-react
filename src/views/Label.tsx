import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import {useHistory } from "react-router-dom";
import styled from "styled-components";
import useTags from "hooks/useTags";
import SelectedTagsIcon from "components/SelectedTagsIcon";

const Wrapping = styled.main`
  font-size: 16px;
  .btn_wrapping {
    text-align: center;
    padding-top: 32px;
    .add-icon {
      width: 2em;
      height: 2em;
    }
  }
`;

const Label = () => {
  const { createTag } = useTags();
  const history = useHistory();

  const addTagBtn = () => {
    const id = createTag("");
    const tid = setTimeout(() => {
      clearTimeout(tid);
      history.push("/labels/" + id);
    });
  };
  const itemClick = (id: string) => {
    history.push("/labels/" + id);
  };
  return (
    <Layout>
      <Wrapping>
        <SelectedTagsIcon onIconClick={itemClick} />
        <div className="btn_wrapping">
          <Icon name="add" className="add-icon" onClick={addTagBtn} />
        </div>
      </Wrapping>
    </Layout>
  );
};

export default Label;
