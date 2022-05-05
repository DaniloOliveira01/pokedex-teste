import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Loading = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent red transparent;
  animation: lds-dual-ring 1.2s linear infinite;
  }
`;




