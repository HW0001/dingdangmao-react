import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const Divwrapping = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  .page-wrapping {
    flex-grow: 1;
    overflow: auto;
  }
`;

const Layout = (props: any) => {
  return (
    <Divwrapping>
      <main className="page-wrapping">{props.children}</main>
      <Nav />
    </Divwrapping>
  );
};

export default Layout;
