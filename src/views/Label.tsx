import Icon from "components/Icon";
import Layout from "components/Layout";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import useTags from "hooks/useTags";

const Wrapping = styled.main`
  font-size: 16px;
  ol {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    li {
      a {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 2em;
        height: 4em;
        margin-left: 1.5em;
        margin-top: 1em;
        .icon {
          width: 2em;
          height: 2em;
        }
      }
    }
  }

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
  const { tags, createTag } = useTags();
  const history = useHistory();

  const addTagBtn = () => {
    const id = createTag("");
    const tid = setTimeout(() => {
      clearTimeout(tid);
      history.push("/labels/" + id);
    });
  };
  return (
    <Layout>
      <Wrapping>
        <ol>
          {tags.map((t) => {
            return (
              <li key={t.id}>
                <Link to={`labels/${t.id}`}>
                  {t.iconName ? (
                    <Icon name={t.iconName} path="tagicons/" />
                  ) : (
                    ""
                  )}
                  <span>{t.name}</span>
                </Link>
              </li>
            );
          })}
        </ol>
        <div className="btn_wrapping">
          <Icon name="add" className="add-icon" onClick={addTagBtn} />
        </div>
      </Wrapping>
    </Layout>
  );
};

export default Label;
