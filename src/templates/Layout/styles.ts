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
`;