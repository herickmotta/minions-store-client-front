import styled from "styled-components";

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

export default MainContent;
