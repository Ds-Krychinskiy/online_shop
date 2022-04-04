import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(150px, 15%, 250px);
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1600px;
  width: 100%;
`;

export const BottonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: clamp(500px, 20%, 600px);
  max-height: 30px;
  height: 100%;
  background-color: white;
  border-radius: 5px;
`;
