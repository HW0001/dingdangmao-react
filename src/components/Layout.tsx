import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import RouterView from "./RouterView";

const Divwrapping = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .page-wrapping {
    flex-grow: 1;
  }
`;

const Layout = () => {
  return (
    <Divwrapping>
      <div className="page-wrapping">
        <RouterView />
      </div>
      <Nav />
    </Divwrapping>
  );
};

export default Layout;
