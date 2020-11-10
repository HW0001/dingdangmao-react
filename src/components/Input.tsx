import React from "react";
import styled from "styled-components";

const Label = styled.label`
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
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest} />
    </Label>
  );
};

export default Input;
