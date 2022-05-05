import styled, { css } from "styled-components";
import { IActiveProps } from "@/@types/type-components";

export const Container = styled.div<IActiveProps>`
  ${({theme}) => css`
    background-color: ${theme.primaryBg};
  `}
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0;
  z-index: 5;
  padding: 10px;
  overflow: hidden;
  pointer-events: none;
  opacity: 0;
  transition: .5s;
  transform: translateY(50px);

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  ${({ Active }) => Active && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }
  `}

  
  @media (min-width: 961px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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