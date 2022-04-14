import type { NextPage } from 'next'

import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

const Home: NextPage = () => {
  return (
    <>
      <p>hello</p>
      <Title>Title</Title>
    </>
  );
};

export default Home;
