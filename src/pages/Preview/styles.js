import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    "header"
    "content";

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 123px;
  }
  > main > div:nth-child(2) {
    display: flex;
    align-items: center;
    margin: 24px 0;
  }

  div > p {
    text-align: justify;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }
`;
export const Star = styled.span`
display: flex;
align-items: center;
gap: 20px;
  > h1 {
    padding: 24px 0;
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }
  > div > svg{
    margin-right: 10px;
    color: ${({theme})=> theme.COLORS.PINK};
    width: 24px;
    height: 24px;
    font-size: 20px;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 25px 0 41px;
  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;
