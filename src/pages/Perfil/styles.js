import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BROWN};
    padding: 29px 144px 64px;
  }

  div:nth-child(3) {
    margin-top: 24px;
  }
  button {
    margin-top: 24px;
  }
`;
export const Form = styled.form`
  text-align: center;
  width: 340px;
  margin: -100px auto;
`;
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;
  width: 186px;
  height: 186px;
  margin-bottom: 64px;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  >label {
    width: 48px;
    height: 48px;
    background-color: ${({theme})=>theme.COLORS.PINK};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input{
      display: none;
    }
    svg{
      width: 20px;
      height: 20px;
    }
  }
`;
