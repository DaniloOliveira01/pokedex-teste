import styled, { css } from 'styled-components'
import { IAtributeProps, ITypeProps } from '@/@types/pokemon';

export const Header = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  color: #fff;
  letter-spacing: 1.5;

  @media (max-width: 960px) {
    height: 180px;
  }
`;

export const NamePokeDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NamePoke = styled.h1`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImagePoke = styled.article`
  width: 450px;
  height: 350px;
  margin: 20px 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);

  @media (max-width: 460px) {
    width: 330px;
    height: 220px;
  }
`;

export const PokeImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TypePoke = styled.div`
  width: 450px;
  height: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  padding: 19px;

  p {
    font-size: 12px;
    font-weight: 600;
    margin-left: 50px;
  }

  @media (max-width: 460px) {
    width: 330px;
  }
`;

export const TypeText = styled.div<ITypeProps>`
  ${({color}) => css`
    background-color: ${color};
    margin: 0 5px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    padding: 3px 8px;
    border-radius: 3px;
    color: #fff;
  `}
`;  

export const DivHeightWeight = styled.div`
  width: 450px;
  height: 30px;
  margin:20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 460px) {
    width: 330px;
  }
`;

export const HW = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  span {
    font-weight: 600;
    font-size: 12px;
  }
`;

export const AtributesDiv = styled.div`
  width: 450px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;

  @media (max-width: 460px) {
    width: 330px;
  }
`;

export const Atribute = styled.div<IAtributeProps>`
  ${({color}) => css`
    background-color: ${color};
    width: 29%;
    border-radius: 3px;
    padding: 3px 8px;
    margin: 2px;
    text-align: center;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 600;
    color: #fff;
  `}
`;
