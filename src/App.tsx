import RouterView from "components/RouterView";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import styled from "styled-components";

const Wraapping = styled.div`
  @media (min-width: 500px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function App() {
  return (
    <Wraapping>
      <Router>
        <RouterView />
      </Router>
    </Wraapping>
  );
}
