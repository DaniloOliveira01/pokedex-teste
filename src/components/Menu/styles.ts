import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({theme}) => css`
    background-color: ${theme.primaryBg};
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;

  @media (max-width: 960px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  padding: 0 20px;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #fadddd;
  text-align: center;
  padding: 0 20px;
`;

export const HrStyle = styled.hr`
  margin-top: 20px;
  width: 75%;
  height: 1px;
  border: none;
  background-color: #fae3e3;
`;