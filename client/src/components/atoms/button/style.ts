import styled from "styled-components";

export const ButtonSearch = styled.button`
  border: none;
  border-radius: 5px;
  background-color: white;
  max-width: 100px;
  width: 100%;
  :hover {
    background-color: #a9a9a9;
  }
  :focus {
    background-color: #808080;
    border: 1px solid #778899;
  }
`;

export const ButtonBasic = styled.button`
  width: 7em;
  height: 2em;
  border: none;
  border-radius: 2em;
  background-color: white;
  background-color: #de8b2c;
  cursor: pointer;
  :hover {
    background-color: #f2870c;
    box-shadow: 0px 0px 10px 2.5px #f2870c;
  }
`;

export const AdminPanelButton = styled.button`
  max-width: 150px;
  width: 100%;
  max-height: 25px;
  height: 100%;
  border-radius: 5px;
  font-size: 15px;
  border: none;
  color: black;
  background-color: ${(props) => (props.disabled ? "#87CEEB" : "#A9A9A9")};
  :hover {
    background-color: #00bfff;
    box-shadow: 0px 0px 10px 2.5px #808080;
  }
`;
