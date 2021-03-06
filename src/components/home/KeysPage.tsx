import React from "react";
import styled from "styled-components";

const KeysSection = styled.section`
  .output {
    border: none;
    display: block;
    width: 100%;
    text-align: right;
    height: 2em;
    font-size: 36px;
    font-family: Consolas;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgb(0, 0, 0, 0.3),
      inset 0 5px 5px -5px rgb(0, 0, 0, 0.3);
  }
  ul {
    li {
      --h: 64px;
      display: inline-block;
      width: 25%;
      font-size: 18px;
      height: var(--h);
      line-height: var(--h);
      text-align: center;
      border: none;
      &.ok {
        float: right;
        height: 128px;
        line-height: 128px;
      }
      &.zero {
        width: 50%;
      }

      :nth-child(1) {
        background-color: #f2f2f2;
      }

      :nth-child(2),
      :nth-child(5) {
        background-color: #e0e0e0;
      }

      :nth-child(3),
      :nth-child(6),
      :nth-child(9) {
        background-color: #d3d3d3;
      }

      :nth-child(4),
      :nth-child(7),
      :nth-child(10) {
        background-color: #c1c1c1;
      }

      :nth-child(8),
      :nth-child(11),
      :nth-child(13) {
        background-color: #b8b8b8;
      }

      :nth-child(14) {
        background-color: #a9a9a9;
      }

      :nth-child(12) {
        background-color: rgb(230, 182, 115);
      }
    }
  }
`;

type Props = {
  value: string;
  onChange: (val: string) => void;
  onSave: () => void;
};

const KeysPage: React.FC<Props> = (props) => {
  const money = props.value;
  const btnWrappingClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const litxt = (e.target as HTMLLIElement).textContent;
    if (!litxt) return;
    let t = money;
    switch (litxt) {
      case ".":
        t.length < 16 && t.indexOf(litxt) === -1 && (t = t + litxt);
        t === "0" && (t = "0" + litxt);
        break;
      case "删除":
        t.length > 0 && (t = t.slice(0, -1));
        t.length === 0 && (t = "0");
        break;
      case "清空":
        t = "0";
        break;
      case "ok":
        saveRecord();
        return;
      case "0":
        t.length < 16 && t !== "0" && (t = t + litxt);
        break;
      default:
        t.length < 16 && t !== "0" && (t = t + litxt);
        t === "0" && (t = litxt);
    }
    props.onChange(t);
  };
  const saveRecord = () => {
    props.onSave();
  };

  return (
    <KeysSection>
      <div className="output">{money}</div>
      <ul onClick={btnWrappingClick}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>删除</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>清空</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li className="ok">ok</li>
        <li className="zero">0</li>
        <li>.</li>
      </ul>
    </KeysSection>
  );
};

export default KeysPage;
