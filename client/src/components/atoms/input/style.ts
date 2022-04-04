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
  }
`;

export const InputRegistration = styled.input`
  max-width: 600px;
  width: 100%;
  max-height: 50px;
  height: 100%;
  border-radius: 5px;
  padding-left: 10px;
  :focus {
    ::placeholder {
      color: white;
    }
  }
`;
