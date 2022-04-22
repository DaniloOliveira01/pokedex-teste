import styled from "styled-components";

export const Nav = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #dd4b4a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 10;
`;

export const LogoPokeball = styled.a`
  width: 100px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
`;

export const Logo = styled.img`
  display: block;
  width: 160px;
`;

export const Settings = styled.a`
  letter-spacing: 1.5px;
  cursor: pointer;
`;

export const LogoSettings = styled.img`
  height: 60%;
  width: 25px;
`;