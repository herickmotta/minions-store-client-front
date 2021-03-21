import styled from "styled-components";
import Colors from "../../config/colors";
import typography from "../../config/typography";

const Container = styled.input`
  width: 100%;
  font-family: ${typography.Roboto};
  background: ${Colors.white};
  font-size: 18px;
  padding: 14px 20px;
  border: 1px solid ${(props) => props.borderColor || Colors.lightGray};
  border-radius: 6px;
  color: ${(props) =>
    props.color || props.disabled ? Colors.lightGray : Colors.black};
`;

export default Container;
