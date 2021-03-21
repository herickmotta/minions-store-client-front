import styled from "styled-components";
import colors from "../../../../config/colors";

export const Container = styled.div`
  width: 400px;
  h1 {
    margin: 10px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const TotalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    padding: 5px;

    display: flex;
    justify-content: space-between;
    color: ${colors.blackGray};
  }
  .total {
    font-weight: bold;
    color: ${colors.blackGray};
  }
`;
