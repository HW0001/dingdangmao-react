import useRecordItem from "hooks/useRecordItem";
import useTags from "hooks/useTags";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapping = styled.div`
  font-size: 16px;
  .date-items {
    padding: 0 8px;
    > li {
      > span {
        line-height: 32px;
      }
    }
    .items {
      display: flex;
      justify-content: space-between;
      padding: 4px 8px;
      .items-notes {
        margin-right: auto;
        margin-left: 10px;
        color: #999999;
      }
    }
  }
`;
type Props = {
  cordtype: "-" | "+";
};
const RecordItemList: React.FC<Props> = (props) => {
  const { findTag } = useTags();
  const { getGroupedTags } = useRecordItem();
  const alltags = getGroupedTags(props.cordtype);
  console.log(alltags);
  const tagname = (tagids: string[]) => {
    return tagids.map((t) => findTag(t).name).join(",") || "无";
  };
  const recordlist = () => {
    return (
      <ul className="date-items">
        {alltags.map((a) => {
          return (
            <li key={a.itemKey}>
              <span>{a.itemKey}</span>
              <ul>
                {a.items.map((b) => {
                  return (
                    <li className="items" key={b.recordAT}>
                      <span>{tagname(b.tags)}</span>
                      <span className="items-notes">{b.notes}</span>
                      <span>￥{b.amount}</span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };
  console.log(Object.keys(alltags));
  return (
    <Wrapping>{alltags.length > 0 ? recordlist() : <h3>暂无记录</h3>}</Wrapping>
  );
};

export default RecordItemList;
