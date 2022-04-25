import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20vw auto;
  height: 100vh;
`;

export const Content = styled.main`
  ${({theme}) => css`
    background-color: ${theme.secundaryBg};
  `}
  height: 100%;

  @media (max-width: 960px) {
    width: 100vw;
  }
`;

export const IconHamburguer = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;

  @media (min-width: 960px) {
    display: none;
  }
`;