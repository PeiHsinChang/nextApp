import React from "react";
import styled from "styled-components";

const Contaner = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

export default function Page() {
  return (
    <>
      <Contaner>Hello World</Contaner>
      <h1>Hello, Next.js!Index===pages</h1>;
    </>
  );
}
