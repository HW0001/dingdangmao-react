import dayjs from "dayjs";
import useRecordItem from "hooks/useRecordItem";
import useTags from "hooks/useTags";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapping = styled.div`
  font-size: 16px;
  .date-items {
    .date-items-title {
      padding: 0 8px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
  const tagname = (tagids: string[]) => {
    return tagids.map((t) => findTag(t).name).join(",") || "无";
  };
  const handleDate = (key: string) => {
    const current = dayjs();
    const recordAT = dayjs(key);
    if (recordAT.isSame(current, "d")) return "今天";
    else if (recordAT.add(1, "d").isSame(current, "d")) return "昨天";
    else if (recordAT.add(2, "d").isSame(current, "d")) return "前天";
    else if (recordAT.isSame(current, "y")) return recordAT.format("M月D日");
    else return recordAT.format("YYYY年M月D日");
  };
  const recordlist = () => {
    return (
      <ul className="date-items">
        {alltags.map((a) => {
          return (
            <li key={a.itemKey}>
              <div className="date-items-title">
                <span>{handleDate(a.itemKey)}</span>
                <span>￥{a.total}</span>
              </div>
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
  return (
    <Wrapping>{alltags.length > 0 ? recordlist() : <h3>暂无记录</h3>}</Wrapping>
  );
};

export default RecordItemList;
