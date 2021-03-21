import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  background: ${colors.lightPink};
  border-radius: 10px;
  display: flex;
  .flex {
    display: flex;
    justify-content: space-between;
    & :first-child {
      margin-right: 5px;
    }
    & :last-child {
      margin-left: 5px;
    }
  }
`;

export const temp = 0;
