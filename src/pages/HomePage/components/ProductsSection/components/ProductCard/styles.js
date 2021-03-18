import styled from "styled-components";
import colors from "../../../../../../config/colors";
import typography from "../../../../../../config/typography";

export const Card = styled.li`
  width: 240px;
  height: 355px;
  border-radius: 10px;
  overflow: hidden;
  font-family: ${typography.Roboto};
`;
export const ImageBox = styled.div`
  height: 60%;
  width: 100%;
  background: ${colors.green};
  display:flex;
  align-items:center;
  justify-content: center;
  flex-shrink:0;
  overflow:hidden;
  img{
    margin-bottom: 25px;
    width: 100%;
  }
`;
export const InfoBox = styled.div`
  height: 30%;
  width: 100%;
  background: ${colors.whiteGray};
  font-size: 16px;
  padding: 15px;
  h2 {
    font-weight: bold;
    color: ${colors.blackGray};
    margin-bottom: 5px;
  }
  p {
    color: ${colors.darkGray};
    margin-bottom: 5px;
  }
`;
