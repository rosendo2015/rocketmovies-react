import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  width: 405px;
  
  > div {
    color:${({theme})=>theme.COLORS.BACKGROUND_700};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;

    strong {
      color:${({theme})=>theme.COLORS.WHITE};
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid ${({theme})=>theme.COLORS.GRAY_100};
  }
`;
