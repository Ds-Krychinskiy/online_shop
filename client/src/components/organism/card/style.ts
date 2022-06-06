import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edeffa;
  margin-bottom: 2em;
  width: 20em;
  height: 20em;
  border-radius: 15px;
  :hover {
    box-shadow: 0px 0px 15px 10px grey;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 150px;
  max-height: 250px;
  height: 100%;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
