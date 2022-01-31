import styled from "styled-components";

export const CardWrapper = styled.div`
  max-width: 200px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 10px;
  border: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    box-shadow: 0px 5px 20px 0px grey;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
