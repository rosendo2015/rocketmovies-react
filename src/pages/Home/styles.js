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
    padding: 0 123px 40px;
    grid-area: content;
    overflow-y: auto;
  }
  main > div {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
