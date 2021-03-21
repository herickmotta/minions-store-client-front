import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

const Page = styled.div`
  background: ${colors.backPink};
  font-family: ${typography.Roboto};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Page;
