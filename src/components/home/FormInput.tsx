import React, { useState } from "react";
import styled from "styled-components";

const NotesSection = styled.section`
  padding: 8px;
  padding-right: 16px;
  label {
    font-size: 14px;
    display: flex;
    span {
      padding: 0 8px;
    }
    input {
      border: none;
      line-height: 22px;
      flex-grow: 1;
    }
  }
`;

const FormInput = () => {
  const [value, setValue] = useState("");
  const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement).value);
  };
  return (
    <NotesSection>
      <label>
        <span>备注:</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          value={value}
          onInput={inputChange}
        />
      </label>
    </NotesSection>
  );
};

export default FormInput;
