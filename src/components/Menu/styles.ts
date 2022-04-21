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

export const PokeList = styled.ul`
  margin-top: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 30px;
  overflow-y: scroll;
  height: 60vh;
  gap: 10px;

::-webkit-scrollbar {
  width: 4.5px;
}

::-webkit-scrollbar-track {
  background: #ffff;
  border-radius: 100px;
}
 

::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 100px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;

export const PokeItem = styled.li`
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`;