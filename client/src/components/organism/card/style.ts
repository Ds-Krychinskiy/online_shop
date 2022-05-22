import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(100px, 20%, 250px);
  height: clamp(200px, 40%, 400px);
  border-radius: 15px;
  border: 1px solid red;
  cursor: pointer;
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
