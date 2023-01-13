import styled from "styled-components";

export const Container = styled.div`
  
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  main {
    
    grid-area: content;
    overflow-y: auto;
    padding: 0 123px 40px;
    > h1 {
      margin: 24px 0 40px;
    }
    h1 + div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
    div:nth-child(6) {
      margin-top: 40px;
      display: flex;
      align-items: center;
      gap: 40px;
    }
  }
`;
