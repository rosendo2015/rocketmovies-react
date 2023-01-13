import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 8px;
  border-radius: 10px;
  
  > input {
    
    width: 100%;
    height: 56px;
    padding: 19px 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;
    
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    }
  }
    > svg {
      margin-left: 16px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
`;
