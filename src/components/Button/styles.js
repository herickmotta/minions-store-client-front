import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.button`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  font-size: ${(props) => props.fontSize || "16px"};
  border-radius: ${(props) => props.borderRadius || "0px"};
  background: ${colors.midPink};
  font-family: ${typography.Roboto};
  font-weight: bold;
  color: ${colors.blackGray};
  cursor: pointer;
`;

export default Container;
