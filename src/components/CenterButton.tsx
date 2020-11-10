import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: block;
  font-size: 16px;
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: rgb(118, 118, 118);
  color: white;
  border: none;
`;

type Props = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;
const CenterButton: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

export default CenterButton;
