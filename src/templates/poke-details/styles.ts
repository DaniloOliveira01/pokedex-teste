import styled, { css } from 'styled-components'

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
  width: 300px;
  height: 250px;
  margin: 20px 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
`;

export const PokeImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const TypePoke = styled.div`
  width: 300px;
  height: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
  display: flex;
  align-items: center;

  p {
    font-size: 12px;
    font-weight: 600;
    margin-left: 20px;
  }
`;

type TypeProps = {
  color: string
}

export const TypeText = styled.div<TypeProps>`
  ${({color}) => css`
    background-color: ${color};
    margin: 0 5px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 3px;
    color: #fff;
  `}
`;  

export const DivHeightWeight = styled.div`
  width: 300px;
  height: 30px;
  margin:20px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const HW = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
  display: flex;
  padding: 2px;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  span {
    font-weight: 500;
    font-size: 12px;
  }
`;

export const AtributesDiv = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.10);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
`;

type AtributeProps = {
  color: string
}

export const Atribute = styled.div<AtributeProps>`
  ${({color}) => css`
    background-color: ${color};
    border-radius: 3px;
    padding: 3px 8px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    color: #fff;
  `}
`;
