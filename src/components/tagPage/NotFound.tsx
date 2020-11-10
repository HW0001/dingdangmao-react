import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrappring = styled.div`
  text-align: center;
`;

const NotFound: React.FC = () => {
  return (
    <Wrappring>
      <h2>未找到该标签</h2>
      <Link to="/labels">返回标签页</Link>
    </Wrappring>
  );
};

export default NotFound;
