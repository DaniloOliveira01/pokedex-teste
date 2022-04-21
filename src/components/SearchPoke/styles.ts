import styled from 'styled-components';

export const SearchInput = styled.div`
  width: 100%;
  padding: 6px 10px;
  border-radius: 20px;
  margin-top: 15px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  background-color: #fff;
  color: #a2a2a2;
`;

export const InputCustom = styled.input`
  width: 100%;
  border: none;

  &:focus {
    box-shadow: 0;
    outline: none;
  }

  &::placeholder {
    font-size: 12px;
    color: #a2a2a2;
  }
`;

