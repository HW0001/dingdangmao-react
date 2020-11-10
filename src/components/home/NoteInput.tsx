import Input from "components/Input";
import React from "react";
import styled from "styled-components";

const NotesSection = styled.section`
  padding: 8px;
  padding-right: 16px;
`;
type Props = {
  value: string;
  onChange: (notes: string) => void;
};
const NoteInput: React.FC<Props> = (prop) => {
  const value = prop.value;
  const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    prop.onChange((e.target as HTMLInputElement).value);
  };
  return (
    <NotesSection>
      <Input label="备注" onChange={inputChange} />
    </NotesSection>
  );
};

export default NoteInput;
