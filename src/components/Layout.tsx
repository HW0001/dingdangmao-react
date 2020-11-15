import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
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
  const wrapping = useRef<HTMLDivElement>(null);
  const route = useLocation();
  useEffect(() => {
    const id = setTimeout(() => {
      if (wrapping.current && route.pathname.indexOf("home") > -1) {
        wrapping.current.scrollTop = 9999;
      }
      clearTimeout(id);
    });
  });
  return (
    <Divwrapping>
      <main className="page-wrapping" ref={wrapping}>
        {props.children}
      </main>
      <Nav />
    </Divwrapping>
  );
};

export default Layout;
