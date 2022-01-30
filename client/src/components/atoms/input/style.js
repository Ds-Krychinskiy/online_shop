import styled from "styled-components";

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  margin: 0px;
  border: 0px;
  padding: 0px;
  padding-left: 10px;
  border-radius: 5px 0px 0px 5px;

  :focus {
    border: none;
    ::placeholder {
      color: white;
    }
  }
`;

export const InputRegistration = styled.input`
  border-radius: 5px;
  padding-left: 10px;
  :focus {
    border: 0px solid white;
    ::placeholder {
      color: white;
    }
  }
`;
