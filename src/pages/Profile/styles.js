import styled from "styled-components";
import colors from "../../config/colors";
import typography from "../../config/typography";

export const Page = styled.div`
  background: ${colors.backPink};
  font-family: ${typography.Roboto};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContent = styled.main`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  justify-content: center;
  padding: 80px 0;
  @media (max-width: 750px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Container = styled.div`
  background: ${colors.lightPink};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin: 10px 0px;
  }
`;
