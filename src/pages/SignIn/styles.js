import styled from "styled-components";
import colors from "../../config/colors";

export const Container = styled.div`
  background: ${colors.lightPink};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    padding-bottom: 20px;
    text-decoration: underline;
  }
`;

export const temp = 0;
