import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  color: #fff;
  padding-top: 16px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 40px;
    margin-bottom: 10px;

    span {
      color: #dd4b4a;
    }
  }

  h2 {
    color: #000;
  }
`;