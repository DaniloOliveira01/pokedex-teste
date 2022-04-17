import styled from "styled-components";

  export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

export const BgPokeball = styled.img`
  width: 110px;
`;

export const LoginPoke = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column; 
  width: 100%;
  align-items: center;
`;

export const FormLogin = styled.form`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputLogin = styled.input`
  width: 100%;
  padding: 4px 8px;
  margin-top: 10px;
  border: 1px solid #979595;
  border-radius: 3px;

  &:focus {
    box-shadow: 0;
    outline: none;
  }

  &::placeholder {
    color: #afafaf;
  }
`;

export const ButtonLogin = styled.button`
  background-color: #0054d0;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  padding: 6px 23px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;