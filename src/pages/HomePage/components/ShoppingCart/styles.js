import styled from "styled-components";
import colors from "../../../../config/colors";

export const Container = styled.div`
  width: 360px;
  @media (max-width: 750px) {
    width: 320px;
    width: 100vw;
  }
`;
export const CartBox = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 510px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: ${colors.lightPink};
  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    background: ${colors.midPink};
    color: ${colors.blackGray};
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
  @media (max-width: 750px) {
    border-radius: 0;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  margin: 20px 0;
  button {
    font-size: 18px;
    margin-bottom: 10px;
  }
  @media (max-width: 750px) {
    border-radius: 0;
  }
`;
